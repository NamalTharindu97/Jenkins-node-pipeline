pipeline {
    agent any
    
    environment {
        PATH = "/usr/local/bin:$PATH" // Adding Docker path to PATH
        DOCKER_HUB_REPO = "namal97/node-app-hi" // Your Docker Hub repository
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/NamalTharindu97/Jenkins-node-pipeline.git'
            }
        }
        stage('verify docker'){
            steps{
                sh 'docker --version'
            }
        }
        stage('build node app docker image'){
            steps{
                sh 'docker build -t ${DOCKER_HUB_REPO}:latest .'
            }
        }
        stage('Logout from any previous Docker Hub session') {
            steps {
                sh 'docker logout'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'dockerhubpassword', variable: 'dockerpassword')]) {
                    sh 'docker login -u namal97 -p ${dockerpassword}'
                }
            }
        }
        stage('Push Docker Image to Docker Hub') {
            steps {
                sh 'docker push ${DOCKER_HUB_REPO}:latest'
            }
        }
        stage('Pull Docker Image from Docker Hub') {
            steps {
                sh 'docker pull ${DOCKER_HUB_REPO}:latest'
            }
        }
    }

    post {
        success {
            echo 'Docker image built, pushed, and pulled successfully!'
        }
        failure {
            echo 'Failed to build, push, or pull Docker image.'
        }
    }
}
