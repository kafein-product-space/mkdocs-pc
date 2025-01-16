## Docker Installation

### Docker Installation for Linux

#### System Requirements
Docker Engine installation steps vary depending on the Linux distribution.

!!! warning 
    If you need to install Docker offline, please contact with product.devops@kafein.com.tr

#### Steps to Install Docker
1. Refer to the [Official Docker Documentation](https://docs.docker.com/engine/install/) for distro-specific installation instructions.
2. Use the package manager of your Linux distribution to install Docker.
   - Recommended version: Docker Engine 26 or higher.

### Docker Installation for Windows

#### System Requirements
- WSL Version: 1.1.3.0 or later.
- Operating System: Windows Server 2022 (build 20348) or higher is recommended.

#### Steps to Install Docker
1. Activate the WSL 2 feature on Windows. For detailed guidance, refer to the [Microsoft WSL Documentation](https://learn.microsoft.com/en-us/windows/wsl/install).

#### Hardware Prerequisites for WSL 2
- A 64-bit processor with [Second Level Address Translation (SLAT)](https://en.wikipedia.org/wiki/Second_Level_Address_Translation) support is required.
- Hardware virtualization (Nested Virtualization) must be enabled in your system's BIOS settings. For further details, check the [Virtualization Overview](https://learn.microsoft.com/en-us/virtualization/).
2. Once WSL 2 is enabled, download and install Docker. We recommend [Docker Desktop 4.34.2]() or higher for enhanced security and performance.

### Verify Docker Installation
To check the installed Docker version, run the following command:

```zsh
docker version
```
