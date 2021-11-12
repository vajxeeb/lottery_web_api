
pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
              /*  sh 'docker image ls'
                sh 'docker build -t finance_api2 .'
                sh 'docker image ls'
                sh 'cat /etc/docker/password.txt | docker login 49.0.198.122:5001 --username admin --password-stdin'
                sh 'docker tag finance_api2 49.0.198.122:5001/finance_api2:latest'
                sh 'docker push 49.0.198.122:5001/finance_api2:latest'*/
                sh 'sonar-scanner \
  -Dsonar.projectKey=web_api \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://49.0.198.122:9000 \
  -Dsonar.login=cfcb7ded9fe49cd0e44a2feade678090272a5ba1'
            }
        }
    }
 
}
