const TOKEN = "自分のToken"; 
const TARGET_NAMES = ["グループDM名1", "グループDM名2"]; 

async function deleteTargetGroupDM() {
  const res = await fetch("https://discord.com/api/v9/users/@me/channels", {
    headers: { Authorization: TOKEN }
  });

  const channels = await res.json();
  for (const channel of channels) {
    if (channel.type === 3 && TARGET_NAMES.includes(channel.name)) {

      await fetch(`https://discord.com/api/v9/channels/${channel.id}`, {
        method: "DELETE",
        headers: { Authorization: TOKEN }
      });

      console.log(`脱退しました: ${channel.name}`);
    }
  }
}

deleteTargetGroupDM();
