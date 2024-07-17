import pymysql
import os
import json

# RDS settings
rds_host  = os.getenv("DB_HOST")
rds_user  =  os.getenv("DB_USER")
rds_password =  os.getenv("DB_PASSWORD")
rds_db_name =  os.getenv("DB_NAME")

def lambda_handler(event, context):
    try:
        # Establish a database connection
        connection = pymysql.connect(
            host=rds_host,
            user=rds_user,
            password=rds_password,
            database=rds_db_name,
            connect_timeout=5
        )
        print("Connection to RDS MySQL instance succeeded")

        with connection.cursor() as cursor:
            create_db_query = "SELECT * FROM project_data"
            cursor.execute(create_db_query)
            rows = cursor.fetchall()

        connection.commit()
        connection.close()

        return {
            # "isBase64Encoded": True|False,
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,GET'
            },
            'body': rows
        }

    except pymysql.MySQLError as e:
        print("Error: Could not connect to MySQL instance.")
        print(e)
        return {
            # "isBase64Encoded": True|False,
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,GET'
            },
            'body': str(e)
        }