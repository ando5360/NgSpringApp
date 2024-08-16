ui = true
disable_mlock = "true"

storage "file" {
  path = "/tmp/data"
}

listener "tcp" {
  address = "[::]:8200"
  tls_disable = "true"
  tls_cert_file = "/certs/vault.crt"
  tls_key_file  = "/certs/vault.key"
}

api_addr = "https://0.0.0.0:8200"
cluster_addr = "https://0.0.0.0:8201"