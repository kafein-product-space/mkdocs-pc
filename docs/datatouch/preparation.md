## **Prerequisites Checklist**

Ensure the following are completed before proceeding:

### **Dataskope DAM**

   TO-DO: Why datatouch needs to connect Dataskope DAM
 
### **Network Requirements**

DataTouch is a web application that operates both at the backend and frontend. We utilize **Nginx** as a reverse proxy to manage traffic to our applications, including those running in Docker containers.

#### **Ports Required:**
- **HTTP**: `80`
- **HTTPS**: `443`

Ensure that these ports are open and properly configured to allow seamless communication between clients and the application.

  
### **Docker**

   - For **Linux**: Docker Engine 26 or higher.
   - For **Windows**: WSL 2 (Windows Subsystem for Linux) and Docker Desktop.

!!! info  
    You can find the details of Docker Installation in our Docker Installation Guide.

### **Hardware Requirements**

!!! note "Select a configuration to view details"
    === "Minimum Configuration"
        - **CPUs**: `8`  
        - **Memory**: `16 GiB`  
        - **Disk**: `200 GiB`  
    === "Recommended Configuration"
        - **CPUs**: `16`  
        - **Memory**: `64 GiB`  
        - **Disk**: `1 TB`  

!!! Note 
    The recommended configuration ensures optimal performance and scalability for your applications.

