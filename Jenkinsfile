node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'sriniDockerHub') {

        def customImage = docker.build("srinivasuluks/node-web-app")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
