import React, { useState } from 'react'
import { tokens } from "../theme";
import { Box, Typography, useTheme, Grid,  IconButton } from '@mui/material';
import { FaPython, FaAws, FaGitlab, FaGithub, FaBitbucket, FaDocker, FaWindows, FaLinux, FaArrowCircleDown} from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiArgo, SiAzuredevops, SiConfluence, SiDatadog, SiFlask, SiJenkins, SiKubernetes, SiMacos, SiMongodb, SiSpinnaker, SiJira, SiPostman } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";


const Skills = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [expandedBox, setExpandedBox] = useState(null);

  const handleHover = (boxIndex) => {
    setExpandedBox(boxIndex);
  };

  const handleMouseLeave = () => {
    setExpandedBox(null);
  };
  
  return (
    <Box
      sx={{
        flexGrow: 0,
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginLeft="15px"
      marginBottom="15px"
    >
      <Grid container width="100%" height="100%" marginTop="40px" marginLeft="70px">
        <Typography
              variant="h1"
              sx={{
                color: colors.blueAccent[400],
                fontWeight: "500",
              }}
              display="flex"
              marginBottom="40px"
            >
              Skills
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={2} md={2}>
            <Box
              sx={{
                flexGrow: 1,
                borderRadius: "10px",
                background: colors.toggle[200],
                boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                ":hover": {
                  width: expandedBox === 1 ? '475%' : 'relative',
                  height: expandedBox === 1 ? 'relative' : 'relative',
                }
              }}
              width="475%"
              display="flex"
              alignItems="center"
              padding="10px"
              marginBottom="10px"
              onMouseEnter={() => handleHover(1)}
              onMouseLeave={handleMouseLeave}
            >
              <IconButton
                    size="large"
                    
                    sx={{
                      color: colors.greenAccent[400],
                      ":hover": {
                        color: colors.blueAccent[500]
                      }
                    }}
                    style={{
                      borderRadius: "100%",
                      background: colors.toggle[200],
                      boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                    }}
                  >
                  <FaPython />
                </IconButton>
                <Typography variant='h4' textAlign='center' ml={5} >Python
                  {expandedBox === 1 && <Typography variant='h6' textAlign='left' ml={5} mr={0} mt={2}>Pandas, NumPy, Matplotlib, Scikit-learn, OpenCV, SQLAlchemy, Tkinter and PyQt </Typography>}
                </Typography>
            {expandedBox !== 1 && <IconButton
                  float="right"
                  size="small"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    },
                    ml:"650px",
                  }}
                  style={{
                    borderRadius: "100%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <FaArrowCircleDown/>
              </IconButton>}
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4} md={6}>
            <Box
              sx={{
                flexGrow: 1,
                borderRadius: "10px",
                background: colors.toggle[200],
                boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                ":hover": {
                  width: expandedBox === 2 ? '150%' : 'relative',
                  height: expandedBox === 2 ? 'auto' : 'relative',
                }
              }}
              width="150%"
              display="flex"
              alignItems="center"
              padding="10px"
              marginBottom="10px"
              onMouseEnter={() => handleHover(2)}
              onMouseLeave={handleMouseLeave}
            >
            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
              <TbSql />
            </IconButton>
            <Typography variant='h4' textAlign='left' ml={5} mr={25} >SQL
              {expandedBox === 2 && <Typography variant='h6' textAlign='left' ml={5} mr={-5} mt={2}>MySQL, PostgreSQL, Snowflake, AWS RDS </Typography>}
            </Typography>
            
            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <SiMongodb />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={5} mr={0} >NoSQL
              {expandedBox === 2 && <Typography variant='h6' textAlign='left' ml={5} mr={0} mt={2}>MongoDB, DynamoDB, CosmosDB, Cassandra</Typography>}
            </Typography>
            {expandedBox !== 2 && <IconButton
                  float="right"
                  size="small"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    },
                    ml:"335px",
                  }}
                  style={{
                    borderRadius: "100%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <FaArrowCircleDown/>
              </IconButton>}
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4} md={6}>
            <Box
              sx={{
                flexGrow: 1,
                borderRadius: "10px",
                background: colors.toggle[200],
                boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                ":hover": {
                  width: expandedBox === 3 ? '150%' : 'relative',
                  height: expandedBox === 3 ? 'auto' : 'relative',
                }
              }}
              display="flex"
              width="150%"
              alignItems="center"
              padding="10px"
              marginBottom="10px"
              onMouseEnter={() => handleHover(3)}
              onMouseLeave={handleMouseLeave}
            >
            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <FaAws />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={5} mr={25} >AWS
              {expandedBox === 3 && <Typography variant='h6' textAlign='left' ml={5} mr={-5} mt={2}>Lambda, EC2, S3, CloudFormation, DynamoDB, RDS, SageMaker, CloudWatch, Glue, ECS, SNS, SQS </Typography>}
            </Typography>
                
            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <SiAzuredevops />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={5} mr={0} >Azure
              {expandedBox === 3 && <Typography variant='h6' textAlign='left' ml={5} mr={0} mt={2}>Blob Storage, Cosmos DB, Functions, CloudFormation, Data Factory</Typography>}
            </Typography>
            {expandedBox !== 3 && <IconButton
                  float="right"
                  size="small"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    },
                    ml:"335px",
                  }}
                  style={{
                    borderRadius: "100%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <FaArrowCircleDown/>
              </IconButton>}
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4} md={6}>
            <Box
              sx={{
                flexGrow: 1,
                borderRadius: "10px",
                background: colors.toggle[200],
                boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
              }}
              width="150%"
              display="flex"
              alignItems="center"
              padding="10px"
              marginBottom="10px"
            >
            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <FaDocker />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={5} mr={22} >Docker</Typography>

            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <SiKubernetes />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={5} mr={0} >Kubernetes</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4} md={6}>
            <Box
              sx={{
                flexGrow: 1,
                borderRadius: "10px",
                background: colors.toggle[200],
                boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
              }}
              width="150%"
              display="flex"
              alignItems="center"
              padding="10px"
              marginBottom="10px"
            >
            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <DiDjango />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={5} mr={10} >Django</Typography>

            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <SiFlask />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={5} mr={10} >Flask</Typography>
          
            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <GrReactjs />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={5} mr={10} >ReactJS</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4} md={6}>
            <Box
              sx={{
                flexGrow: 1,
                borderRadius: "10px",
                background: colors.toggle[200],
                boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
              }}
              width="150%"
              display="flex"
              alignItems="center"
              padding="10px"
              marginBottom="10px"
            >
            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <FaGithub />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={5} mr={10} >GitHub</Typography>

            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <FaGitlab />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={5} mr={8} >GitLab</Typography>
          
            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <FaBitbucket />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={5} mr={10} >BitBucket</Typography>
            </Box>
          </Grid>
        </Grid>  
        <Grid container spacing={2}>
          <Grid item xs={4} md={6}>
            <Box
              sx={{
                flexGrow: 1,
                borderRadius: "10px",
                background: colors.toggle[200],
                boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
              }}
              width="150%"
              display="flex"
              alignItems="center"
              padding="10px"
              marginBottom="10px"
            >
            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <SiJenkins />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={5} mr={10} >Jenkins</Typography>

            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <SiSpinnaker />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={5} mr={4} >Spinnaker</Typography>
          
            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "50%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <SiArgo />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={5} >ArgoCD</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4} md={6}>
            <Box
              sx={{
                flexGrow: 1,
                borderRadius: "10px",
                background: colors.toggle[200],
                boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
              }}
              width="150%"
              display="flex"
              alignItems="center"
              padding="10px"
              marginBottom="10px"
            >
            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <FaWindows />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={5} mr={8}>Windows</Typography>

            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <SiMacos />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={5} mr={8} >MacOS</Typography>
            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <FaLinux />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={5} mr={5} >Linux</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4} md={6}>
            <Box
              sx={{
                flexGrow: 1,
                borderRadius: "10px",
                background: colors.toggle[200],
                boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
              }}
              width="150%"
              display="flex"
              alignItems="center"
              padding="10px"
              
              marginBottom="10px"
            >
            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <SiJira />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={3} mr={5}>Jira</Typography>

            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "100%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <SiConfluence />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={3} mr={5}>Confluence</Typography>
            
            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "50%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <SiDatadog />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={3} mr={5}>Datadog</Typography>
            
            <IconButton
                size="large"
                sx={{
                  color: colors.greenAccent[400],
                  ":hover": {
                    color: colors.blueAccent[500]
                  }
                }}
                style={{
                  borderRadius: "50%",
                  background: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                }}
              >
                <SiPostman />
              </IconButton>
            <Typography variant='h4' textAlign='left' ml={3}>Postman</Typography>
            
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Skills
