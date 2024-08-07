Install-Module 'PSDscResources' -Verbose
Configuration basic00 {
    Import-DscResource -Module 'PSDscResources'



    $OutputDir = '..\target'
    New-Item -Path $OutputDir -ItemType Directory -Force

    [DSCLocalConfigurationManager()]
    Node localhost {
        WindowsOptionalFeatureSet EnableMe {
            Name = @(
                'ISS-CGI',
                'IIS-ApplicationInit',
                'Windows-Defender-Default-Definitions',
                'IIS-WebDAV',
                'IIS-ISAPIExtensions',
                'IIS-ISAPIFilter',
                'HypervisorPlatform',
                'VirtualMachinePlatform',
                'Microsoft-Windows-Subsystem-Linux',        
                'WCF-HTTP-Activation',
                'WCF-NonHTTP-Activation',
                'WCF-Services45',
                'WCF-HTTP-Activation45',
                'WCF-TCP-Activation45',
                'WCF-Pipe-Activation45',
                'WCF-MSMQ-Activation45',
                'WCF-TCP-PortSharing45',
                'OpenSSH.Client'
            )
            Ensure  = 'Present'
                        LogPath = $OutputDir + "\installed.log"
        }
    
        WindowsOptionalFeatureSet DisableMe {
            Name = @(
                'IIS-BasicAuthentication',
                'TFTP',
                'Microsoft-RemoteDesktopConnection'
            )
            Ensure  = 'Absent'
            RemoveFilesOnDisable = $true
            LogPath = $OutputDir + "\unintstalled.log"
        }
    }
    
}

