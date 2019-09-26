window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    liff.getProfile()
    .then(profile => {
      const name = profile.displayName
      const profilePictureDiv = document.getElementById('profilepicturediv');
      if (profilePictureDiv.firstElementChild) {
          profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
      }
      const img = document.createElement('img');
      img.src = profile.pictureUrl+'?fit=thumb&f=top_left&h=200&w=200&r=180';
      img.class="rounded-circle";
      img.alt = "Profile Picture";
      img.style="width:200px";
      profilePictureDiv.appendChild(img);
      document.getElementById('displaynamefield').innerHTML=name;
      window.alert(profile.pictureUrl);

    })
    .catch((err) => {
      console.log('error', err);
    });
    document.getElementById("useridfield").innerHTML = data.context.userId;
    document.getElementById('languagefield').textContent = data.language;
    document.getElementById('viewtypefield').textContent = data.context.viewType;
    // document.getElementById('useridfield').textContent = data.context.userId;
    document.getElementById('utouidfield').textContent = data.context.utouId;
    document.getElementById('roomidfield').textContent = data.context.roomId;
    document.getElementById('groupidfield').textContent = data.context.groupId;

    // openWindow call
    document.getElementById('openwindowbutton').addEventListener('click', function () {
        liff.openWindow({
            url: 'https://line.me'
        });
    });

    // closeWindow call
    document.getElementById('closewindowbutton').addEventListener('click', function () {
        liff.closeWindow();
    });

    // sendMessages call
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "You've successfully sent a message! Hooray!"
        }, {
            type: 'sticker',
            packageId: '2',
            stickerId: '144'
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });

    // get access token
    document.getElementById('getaccesstoken').addEventListener('click', function () {
        const accessToken = liff.getAccessToken();
        document.getElementById('accesstokenfield').textContent = accessToken;
        toggleAccessToken();
    });

    // get profile call
    document.getElementById('getprofilebutton').addEventListener('click', function () {
        liff.getProfile().then(function (profile) {
            document.getElementById('useridprofilefield').textContent = profile.userId;
            document.getElementById('displaynamefield').innerHTML = profile.displayName;

            const profilePictureDiv = document.getElementById('profilepicturediv');
            if (profilePictureDiv.firstElementChild) {
                profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
            }
            const img = document.createElement('img');
            img.src = profile.pictureUrl;
            img.alt = "Profile Picture";
            profilePictureDiv.appendChild(img);

            document.getElementById('statusmessagefield').textContent = profile.statusMessage;
            toggleProfileData();
        }).catch(function (error) {
            window.alert("Error getting profile: " + error);
        });
    });
}

function toggleAccessToken() {
    toggleElement('accesstokendata');
}

function toggleProfileData() {
    toggleElement('profileinfo');
}

function toggleElement(elementId) {
    const elem = document.getElementById(elementId);
    if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    }
}