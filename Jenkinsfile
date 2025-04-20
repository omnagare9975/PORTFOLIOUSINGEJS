pipeline{
    agent any
    environment{
        DOCKER_CRED = credentials('dockercred')
        IMAGE_NAME = 'profileejsapp'
        
    }
    stages{
        stage('cloning the repo'){
            steps{
                git branch: 'main', url: 'https://github.com/omnagare9975/PORTFOLIOUSINGEJS.git'
            }
        }
        stage('Build The Docker Image '){
            steps{
                echo "Building the docker image"
                sh '''
                     docker build -t $DOCKER_CRED_USR/$IMAGE_NAME .
                   '''
            }
        }
        stage('Push Image to DockerHub'){
            steps{
                echo "Push the image"
                sh '''
                    echo $DOCKER_CRED_PSW | docker login -u $DOCKER_CRED_USR --password-stdin
                    docker push $DOCKER_CRED_USR/$IMAGE_NAME:latest
                   '''
                echo "image has been pushed"
            }
        }
        stage('Pull Image And Run Container'){
            steps{
                echo "Pull Image"
                sh '''
                     echo $DOCKER_CRED_PSW | docker login -u $DOCKER_CRED_USR --password-stdin
                     docker pull $DOCKER_CRED_USR/$IMAGE_NAME
                     docker stop profile || true
                     docker rm profile || true
                     docker run -d --name profile -p 9000:9000 $DOCKER_CRED_USR/$IMAGE_NAME:latest
                   '''
            }
        }
        
    }
}
