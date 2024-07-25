pipeline {
    agent any

    environment {
        IMAGE_NAME = 'mathsheetiman'
        CONTAINER_NAME = 'mathsheetiman'
        REPO_URL = 'https://github.com/ImnMuqri/MathSheetIman.git'
        WORK_DIR = 'MathSheetIman'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository
                git url: "${env.REPO_URL}", branch: 'main'
            }
        }
         stage('Add Docker') {
            steps {
                // Checkout the repository
                docker exec -it myjenkins bash
                apt-get update -y
                apt-get install -y docker.io
                docker --version
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build Docker image
                script {
                    sh '''
                    docker build -t ${IMAGE_NAME} .
                    '''
                }
            }
        }

        stage('Stop and Remove Existing Container') {
            steps {
                // Stop and remove existing container if it exists
                script {
                    sh '''
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                    '''
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                // Run Docker container
                script {
                    sh '''
                    docker run -d -p 8000:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}
                    '''
                }
            }
        }
    }

    post {
        always {
            // Cleanup workspace
            cleanWs()
        }
    }
}
