### Personal Data is protected via Fragmentation
In this model, sensitive information is divided across
multiple data sources or fragments in such a way that no single fragment
contains enough data to be damaging or to reconstruct the complete data
without access to the others. In my apps case I have
* Hashicorp Vault
##### Contains all authentication data alongside unique hashes 'accessor tokens' for all users
* MYSQL | InnoDB
##### Contains all site media data for example photos and posts
* LDAPS Node
##### Contains information unique to the user such as address and names but is inaccesible without the hashcodes / from the previous 2 data sources
