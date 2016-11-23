# OpenStack User Activity Monitoring & Recommendation

```
This is the repository for the user-deployable. Back-end package is here:
```
https://github.com/nakapika/openstack-recommendation-engine

Technology Stack: **Node.js, Express.js**

Monitoring activity of users in VMs deployed using OpenStack and giving relevant recommendations to help user.

Will be using the .bash_history of the user to give him helpful recommendations.

The data for recommendations is collected by crawling the web and persisting the data in Apache Solr.

## Installation

Add the following line to .bashrc: `PROMPT_COMMAND='history -a'`

Install Node using NVM

To setup project: `npm install`

## Usage

Run app.js using: `npm start`

Type commands on the terminal to get recommendations at http://0.0.0.0:8080/search :)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
