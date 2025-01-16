### Quickstart Installation

The application's Quickstart installation process is automated through a scripts. This scripts handles the setup and deployment, including the installation of necessary dependencies like Docker and Docker Compose. The bash script approach ensures a consistent and reproducible installation across different operating systems, while also allowing for easy customization to meet specific requirements.

#### Create Directory and Extract Archive

The application's release is provided as a compressed tar.gz archive, which offers an efficient and convenient distribution method. However, the Docker images used in the deployment are quite large in size, which may pose challenges in terms of storage requirements and download times, especially for users with limited bandwidth or storage space.

!!! Abstract ""
    === "Linux"
        ```bash
        mkdir datatouch
        tar -xvzf datatouch-3.1.0.tar.gz -C datatouch
        ```

    === "Windows"
        ```powershell
        New-Item -ItemType Directory -Name "datatouch"
        tar -xvzf datatouch-3.1.0.tar.gz -C datatouch
        ```

!!! info "Windows Server 2022 and higher releases includes ```tar``` built-in. "

#### Load Docker Images

The Docker Images are quite large as itself but we exported and compressed. Before the installation we need to extract images using the command below. 

!!! Abstract ""
    === "Linux"
        ```bash
        ./config.sh load_images
        ```

    === "Windows"
        ```powershell
        ./config.ps1 load_images
        ```
#### Configure the hostname

The `set_hostname` script is a utility provided with the application to help configure the necessary hostname parameters. This script sets up the appropriate settings for the frontend, backend, and CORS (Cross-Origin Resource Sharing) configurations.

The `set_hostname` script specifically sets the browser URL for the application. This includes configuring the protocol (e.g., HTTP or HTTPS) and the domain name which helps us using any port on the URL. Ensuring the correct browser URL is essential for users to access the application through their web browsers and for the application to properly handle requests and responses.

!!! Abstract ""
    === "Linux"
        ```bash
        ./config.sh set_hostname
        ```

    === "Windows"
        ```powershell
        ./config.ps1 set_hostname
        ```

!!! Info "You will need the following variable when the running script."
    - Hostname (Ip or DNS)

#### Connect Dataskope

TO-DO ADD explanation.

!!! Abstract ""
    === "Linux"
        ```bash
        ./config.sh connect_dataskope
        ```

    === "Windows"
        ```powershell
        ./config.ps1 connect_dataskope
        ```

!!! Info "You will need the following variables when the running script."
    - DAM_URL
    - DAM_USERNAME
    - DAM_PASSWORD
    - DAM_ELASTIC_HOSTNAME
    - DAM_ELASTIC_HOSTNAME
    - DAM_ELASTIC_PASSWORD

### Metadata Configuration

#### Connect Datafocus

#### Connect SDM