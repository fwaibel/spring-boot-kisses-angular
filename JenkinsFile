node {
    stage('Checkout') {
        git url: 'git@github.com:fwaibel/spring-boot-kisses-angular.git'
    }

    stage('Build') {
        sh './gradlew build'
    }

}
