const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>We need just a moment of your time</h3>
          <p>${survey.body}</p>
          <div style="display: inline-block;width: 32px;height: 32px;margin: 5px;">
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/1">
              <img style="width:100%;height:100%;" src="https://i.imgur.com/SCsBAzi.png">
            </a>
          </div>
          <div style="display: inline-block;width: 32px;height: 32px;margin: 5px;">
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/2">
              <img style="width:100%;height:100%;" src="https://i.imgur.com/SCsBAzi.png">
            </a>
          </div>
          <div style="display: inline-block;width: 32px;height: 32px;margin: 5px;">
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/3">
              <img style="width:100%;height:100%;" src="https://i.imgur.com/SCsBAzi.png">
            </a>
          </div>
          <div style="display: inline-block;width: 32px;height: 32px;margin: 5px;">
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/4">
              <img style="width:100%;height:100%;" src="https://i.imgur.com/SCsBAzi.png">
            </a>
          </div>
          <div style="display: inline-block;width: 32px;height: 32px;margin: 5px;">
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/5">
              <img style="width:100%;height:100%;" src="https://i.imgur.com/SCsBAzi.png">
            </a>
          </div>
        </div>
      </body>
    </html>
  `;
};
