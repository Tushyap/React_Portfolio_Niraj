sam build
sam validate
sam deploy --stack-name sam-app \
--parameter-overrides \
LambdaSecurityGroupId1="sg-075cbbffe5d0cb39b" \
LambdaSecurityGroupId2="sg-05622ed0db04940c6" \
VpcId=vpc-00d2ae15d37e878d1 \
SubnetIds=subnet-00b8c54d2a693c9c6,subnet-034ed5a00e38595b7,subnet-09988e1ccae724cad,subnet-0fdd88ff194adff01,subnet-0a9be580f043cf838 \
DBInstanceIdentifier="portfolio-db" \
DBEndpoint="portfolio-db.catnz8an2wm3.us-east-1.rds.amazonaws.com" \
DBPort="3306" \
DBUser="admin" \
DBName="portfolio_DB" \
DBPassword="root1234" 