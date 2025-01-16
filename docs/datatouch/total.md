Apologies for the misunderstanding earlier! Here's the updated guide where the **"Install Data Touch DAM"** section is presented in a **tabbed layout** for Linux and Windows, while the rest of the guide remains unchanged, with Docker installation as separate sections.

---

# Data Touch DAM Installation Guide

Welcome to the **Data Touch DAM Installation Guide**! This guide is designed to help you install and configure Data Touch DAM, even if you're new to Docker or Linux. Follow these steps carefully to get started.

## **Before You Begin**

### Prerequisites Checklist
Ensure the following are completed before proceeding:

1. **Dataskope DAM is installed and running.**

2. **Open Ports:**
   - **80** (HTTP)
   - **443** (HTTPS)
3. **Docker Installed:**

   - For **Linux**: Docker Engine 26 or higher.
   - For **Windows**: WSL 2 (Windows Subsystem for Linux) and Docker Desktop.
4. **Hardware Requirements:**
   - **Memory**: 32 GiB
   - **CPUs**: 8

---

## **Step 1: Install Docker**

Docker is required to run Data Touch DAM as it uses containerized services. Follow the steps below based on your operating system.

### **For Linux**
1. Update your package manager:
   ```bash
   sudo apt-get update
   ```
2. Install Docker:
   ```bash
   sudo apt-get install docker.io
   ```
3. Verify the installation:
   ```bash
   docker --version
   ```

---

### **For Windows**
1. Enable **WSL 2**:
   - Follow the [official WSL installation guide](https://learn.microsoft.com/en-us/windows/wsl/install).
2. Download and install **Docker Desktop**:
   - Visit [Docker Desktop](https://www.docker.com/products/docker-desktop) and download the installer.
3. Allocate resources in Docker Desktop:
   - Open Docker Desktop and go to **Settings > Resources > Advanced**.
   - Set:
     - **Memory**: 32 GiB
     - **CPUs**: 8

---

## **Step 2: Install Data Touch DAM**

The installation process differs slightly for Linux and Windows. Use the tabs below to select your operating system and follow the instructions.

=== "Linux"

1. **Extract the Installation Package**:
   - Create a folder for the installation:
     ```bash
     mkdir datatouch
     tar -xvzf datatouch-3.1.0.tar.gz -C datatouch
     ```

2. **Load Docker Images**:
   - Run the provided script to load all Docker images:
     ```bash
     ./config.sh load_images
     ```
   - Verify the images:
     ```bash
     docker image ls
     ```

3. **Configure the Application**:
   - Use the `config.sh` script to set up parameters:
     ```bash
     ./config.sh set_hostname
     ./config.sh connect_dataskope
     ```
   - Follow the prompts to input hostnames and Dataskope DAM connection details.

4. **Set Up Metadata Integration**:
   - Choose between **Data Focus** or **SDM**:
     ```bash
     ./config.sh connect_datafocus   # For Data Focus
     ./config.sh connect_sdm         # For SDM
     ```

---

=== "Windows"

1. **Extract the Installation Package**:
   - Use **7zip** or another extraction tool to extract the `.tar.gz` file into a folder:
     ```powershell
     mkdir datatouch
     tar -xvzf datatouch-3.1.0.tar.gz -C datatouch
     ```

2. **Load Docker Images**:
   - Run the provided script to load all Docker images:
     ```powershell
     ./config.ps1 load_images
     ```
   - Verify the images:
     ```powershell
     docker image ls
     ```

3. **Configure the Application**:
   - Use the `config.ps1` script to set up parameters:
     ```powershell
     ./config.ps1 set_hostname
     ./config.ps1 connect_dataskope
     ```
   - Follow the prompts to input hostnames and Dataskope DAM connection details.

4. **Set Up Metadata Integration**:
   - Choose between **Data Focus** or **SDM**:
     ```powershell
     ./config.ps1 connect_datafocus   # For Data Focus
     ./config.ps1 connect_sdm         # For SDM
     ```

---

## **Step 3: Enable HTTPS (Optional)**

To enable secure communication using HTTPS, follow these steps:

1. Obtain valid SSL certificates (`.crt` and `.key` files).
2. Place the certificates in the **router directory**.
3. Edit the `default.conf` file in the router directory:
   - Uncomment the HTTPS configuration lines.
   - Update the paths to the certificate files.
4. Restart the router:
   ```bash
   docker compose restart router
   ```

---

## **Step 4: Deploy the Application**

Deploying the application is straightforward. Once you've completed the configuration, use the following steps:

1. Start the application:
   ```bash
   docker compose up -d
   ```
2. Verify that all containers are running and have a "healthy" status:
   ```bash
   docker ps
   ```
3. If any container is "unhealthy," check its logs for troubleshooting:
   ```bash
   docker logs -f <container_name>
   ```

---

## **Step 5: Troubleshooting**

### Common Issues and Solutions

| **Issue**                               | **Solution**                                                                 |
|-----------------------------------------|-----------------------------------------------------------------------------|
| Misconfigured application               | Reinstall the application by removing the `datatouch` folder and restarting. |
| CORS errors or UI inaccessible          | Restart the router and verify hostname configuration.                       |
| Docker Compose not recognized as a command | Ensure Docker Compose is installed correctly.                              |

---

## **Key Highlights**

- **Beginner-Friendly**: Designed for users with little Docker/Linux experience.
- **Cross-Platform Support**: Works on both Linux and Windows.
- **Secure Setup**: Optional HTTPS and network isolation for enhanced security.
- **Metadata Integration**: Supports **Data Focus** and **SDM** configurations.
- **Troubleshooting Help**: Clear steps to resolve common issues.

---

This format retains the **Docker installation as separate sections** and uses **tabs** for the "Install Data Touch DAM" section, making it easier for users to follow instructions based on their operating system.