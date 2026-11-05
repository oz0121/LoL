// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoadedイベントが発火しました。');

    // 全チャンピオンデータ (評価機能に必要なロール、ダメージタイプ、特徴がここに含まれています。)
    // 前回の応答で提供された champions 配列をそのまま使用
    const champions = [
        { id: 'aatrox', name: 'Aatrox', roles: ['Top'], damageType: 'AD', features: ['Burst', 'Sustain', 'Engage', 'Scaling', 'HighSkillCap'] },
        { id: 'ahri', name: 'Ahri', roles: ['Mid'], damageType: 'AP', features: ['Burst', 'Mobility', 'Poke', 'Scaling', 'HighSkillCap'] },
        { id: 'akali', name: 'Akali', roles: ['Mid'], damageType: 'AP', features: ['Burst', 'Stealth', 'Mobility', 'HighSkillCap'] },
        { id: 'alistar', name: 'Alistar', roles: ['Support'], damageType: 'AD', features: ['HardCC', 'Engage', 'Tanky', 'Disengage'] },
        { id: 'amumu', name: 'Amumu', roles: ['Jungle'], damageType: 'AP', features: ['AoE', 'HardCC', 'Engage', 'Sustain'] },
        { id: 'anivia', name: 'Anivia', roles: ['Mid'], damageType: 'AP', features: ['AoE', 'Scaling', 'Poke', 'Utility', 'HighSkillCap'] },
        { id: 'annie', name: 'Annie', roles: ['Mid'], damageType: 'AP', features: ['Burst', 'Poke', 'AoE', 'HighSkillCap', 'Simple'] },
        { id: 'aphelios', name: 'Aphelios', roles: ['Bot'], damageType: 'AD', features: ['Scaling', 'Poke', 'Carry', 'HighSkillCap'] },
        { id: 'ashe', name: 'Ashe', roles: ['Bot'], damageType: 'AD', features: ['Poke', 'GlobalSkill', 'Scaling', 'Utility', 'Simple'] },
        { id: 'aurelionsol', name: 'Aurelion Sol', roles: ['Mid'], damageType: 'AP', features: ['GlobalSkill', 'Scaling', 'Poke', 'HighSkillCap'] },
        { id: 'azir', name: 'Azir', roles: ['Mid'], damageType: 'AP', features: ['Poke', 'Scaling', 'HighSkillCap', 'AoE'] },
        { id: 'bard', name: 'Bard', roles: ['Support'], damageType: 'Mixed', features: ['Utility', 'Roam', 'GlobalSkill', 'HighSkillCap'] },
        { id: 'belveth', name: 'Bel\'Veth', roles: ['Jungle'], damageType: 'AD', features: ['Scaling', 'SplitPush', 'Carry', 'HighSkillCap'] },
        { id: 'blitzcrank', name: 'Blitzcrank', roles: ['Support'], damageType: 'AD', features: ['Engage', 'HardCC', 'Simple'] },
        { id: 'brand', name: 'Brand', roles: ['Support', 'Mid'], damageType: 'AP', features: ['Burst', 'Poke', 'AoE', 'Scaling'] },
        { id: 'braum', name: 'Braum', roles: ['Support'], damageType: 'AD', features: ['Shield', 'HardCC', 'Poke', 'Disengage', 'Tanky', 'Simple'] },
        { id: 'briar', name: 'Briar', roles: ['Jungle'], damageType: 'AD', features: ['Sustain', 'Burst', 'Carry', 'HighSkillCap'] },
        { id: 'caitlyn', name: 'Caitlyn', roles: ['Bot'], damageType: 'AD', features: ['Poke', 'Scaling', 'Simple', 'Utility'] },
        { id: 'camille', name: 'Camille', roles: ['Top'], damageType: 'AD', features: ['Duelist', 'Mobility', 'Burst', 'HighSkillCap'] },
        { id: 'cassiopeia', name: 'Cassiopeia', roles: ['Mid'], damageType: 'AP', features: ['Sustain', 'Scaling', 'Poke', 'HighSkillCap'] },
        { id: 'chogath', name: 'Cho\'Gath', roles: ['Top'], damageType: 'AP', features: ['Tanky', 'Sustain', 'AoE', 'HardCC'] },
        { id: 'corki', name: 'Corki', roles: ['Mid'], damageType: 'Mixed', features: ['Poke', 'Mobility', 'Scaling', 'HighSkillCap'] },
        { id: 'darius', name: 'Darius', roles: ['Top'], damageType: 'AD', features: ['Sustain', 'Duelist', 'Simple'] },
        { id: 'diana', name: 'Diana', roles: ['Mid', 'Jungle'], damageType: 'AP', features: ['Burst', 'Engage', 'Sustain', 'HighSkillCap'] },
        { id: 'drmundo', name: 'Dr. Mundo', roles: ['Top'], damageType: 'AD', features: ['Tanky', 'Sustain', 'Simple'] },
        { id: 'draven', name: 'Draven', roles: ['Bot'], damageType: 'AD', features: ['Burst', 'HighSkillCap', 'Carry'] },
        { id: 'ekko', name: 'Ekko', roles: ['Mid', 'Jungle'], damageType: 'AP', features: ['Burst', 'Mobility', 'HighSkillCap', 'Scaling'] },
        { id: 'elise', name: 'Elise', roles: ['Jungle'], damageType: 'AP', features: ['Burst', 'Mobility', 'HighSkillCap'] },
        { id: 'evelynn', name: 'Evelynn', roles: ['Jungle'], damageType: 'AP', features: ['Burst', 'Stealth', 'HighSkillCap'] },
        { id: 'ezreal', name: 'Ezreal', roles: ['Bot'], damageType: 'AD', features: ['Poke', 'Mobility', 'Scaling', 'HighSkillCap'] },
        { id: 'fiddlesticks', name: 'Fiddlesticks', roles: ['Jungle'], damageType: 'AP', features: ['AoE', 'CC', 'Fear', 'Scaling'] },
        { id: 'fiora', name: 'Fiora', roles: ['Top'], damageType: 'AD', features: ['Duelist', 'Sustain', 'SplitPush', 'HighSkillCap'] },
        { id: 'fizz', name: 'Fizz', roles: ['Mid'], damageType: 'AP', features: ['Burst', 'Mobility', 'HighSkillCap'] },
        { id: 'galio', name: 'Galio', roles: ['Mid'], damageType: 'AP', features: ['Tanky', 'Engage', 'GlobalSkill', 'AoE'] },
        { id: 'gangplank', name: 'Gangplank', roles: ['Top'], damageType: 'AD', features: ['Scaling', 'GlobalSkill', 'Poke', 'HighSkillCap'] },
        { id: 'garen', name: 'Garen', roles: ['Top'], damageType: 'AD', features: ['Simple', 'Sustain', 'Execute'] },
        { id: 'gnar', name: 'Gnar', roles: ['Top'], damageType: 'AD', features: ['Mobility', 'AoE', 'Engage', 'HighSkillCap'] },
        { id: 'gragas', name: 'Gragas', roles: ['Top', 'Jungle'], damageType: 'AP', features: ['Tanky', 'Disengage', 'Engage', 'AoE'] },
        { id: 'graves', name: 'Graves', roles: ['Jungle'], damageType: 'AD', features: ['Burst', 'Scaling', 'HighSkillCap'] },
        { id: 'gwen', name: 'Gwen', roles: ['Top'], damageType: 'AP', features: ['Sustain', 'Duelist', 'Scaling', 'HighSkillCap'] },
        { id: 'hecarim', name: 'Hecarim', roles: ['Jungle'], damageType: 'AD', features: ['Engage', 'Speed', 'Scaling', 'HighSkillCap'] },
        { id: 'heimerdinger', name: 'Heimerdinger', roles: ['Mid'], damageType: 'AP', features: ['Poke', 'Turrets', 'AoE', 'Scaling'] },
        { id: 'illaoi', name: 'Illaoi', roles: ['Top'], damageType: 'AD', features: ['Sustain', 'SplitPush', 'AoE'] },
        { id: 'irelia', name: 'Irelia', roles: ['Top', 'Mid'], damageType: 'AD', features: ['Duelist', 'Mobility', 'Scaling', 'HighSkillCap'] },
        { id: 'ivern', name: 'Ivern', roles: ['Jungle'], damageType: 'AP', features: ['Utility', 'Shield', 'Disengage', 'Roam'] },
        { id: 'janna', name: 'Janna', roles: ['Support'], damageType: 'AP', features: ['Disengage', 'Shield', 'Heal', 'Utility'] },
        { id: 'jarvaniv', name: 'Jarvan IV', roles: ['Jungle'], damageType: 'AD', features: ['Engage', 'Simple', 'AoE', 'Utility'] },
        { id: 'jax', name: 'Jax', roles: ['Top', 'Jungle'], damageType: 'AD', features: ['Scaling', 'Duelist', 'Sustain', 'HighSkillCap'] },
        { id: 'jayce', name: 'Jayce', roles: ['Top', 'Mid'], damageType: 'AD', features: ['Poke', 'HighSkillCap', 'Burst'] },
        { id: 'jhin', name: 'Jhin', roles: ['Bot'], damageType: 'AD', features: ['Burst', 'Poke', 'Scaling', 'Utility'] },
        { id: 'jinx', name: 'Jinx', roles: ['Bot'], damageType: 'AD', features: ['Scaling', 'Simple', 'AoE'] },
        { id: 'kaisa', name: 'Kai\'Sa', roles: ['Bot'], damageType: 'Mixed', features: ['Scaling', 'Mobility', 'HighSkillCap', 'Carry'] },
        { id: 'kalista', name: 'Kalista', roles: ['Bot'], damageType: 'AD', features: ['Mobility', 'HighSkillCap', 'Duelist'] },
        { id: 'karma', name: 'Karma', roles: ['Support', 'Mid'], damageType: 'AP', features: ['Poke', 'Shield', 'Utility'] },
        { id: 'karthus', name: 'Karthus', roles: ['Mid', 'Jungle'], damageType: 'AP', features: ['GlobalSkill', 'AoE', 'Scaling'] },
        { id: 'kassadin', name: 'Kassadin', roles: ['Mid'], damageType: 'AP', features: ['Scaling', 'Mobility', 'HighSkillCap'] },
        { id: 'katarina', name: 'Katarina', roles: ['Mid'], damageType: 'AP', features: ['AoE', 'Burst', 'HighSkillCap', 'Reset'] },
        { id: 'kayle', name: 'Kayle', roles: ['Top', 'Mid'], damageType: 'AP', features: ['Scaling', 'Heal', 'Carry'] },
        { id: 'kayn', name: 'Kayn', roles: ['Jungle'], damageType: 'AD', features: ['Mobility', 'Scaling', 'Transform', 'HighSkillCap'] },
        { id: 'kennen', name: 'Kennen', roles: ['Top', 'Mid'], damageType: 'AP', features: ['AoE', 'Engage', 'Scaling'] },
        { id: 'khazix', name: 'Kha\'Zix', roles: ['Jungle'], damageType: 'AD', features: ['Burst', 'Stealth', 'Isolation', 'HighSkillCap'] },
        { id: 'kindred', name: 'Kindred', roles: ['Jungle'], damageType: 'Mixed', features: ['Scaling', 'Range', 'Ultimate', 'Carry'] },
        { id: 'kled', name: 'Kled', roles: ['Top'], damageType: 'AD', features: ['Engage', 'Scaling', 'Duelist'] },
        { id: 'kogmaw', name: 'Kog\'Maw', roles: ['Bot'], damageType: 'Mixed', features: ['Scaling', 'Poke', 'Carry', 'Simple'] },
        { id: 'leblanc', name: 'LeBlanc', roles: ['Mid'], damageType: 'AP', features: ['Burst', 'Mobility', 'HighSkillCap', 'Poke'] },
        { id: 'leesin', name: 'Lee Sin', roles: ['Jungle'], damageType: 'AD', features: ['EarlyGame', 'Mobility', 'HighSkillCap', 'Carry'] },
        { id: 'leona', name: 'Leona', roles: ['Support'], damageType: 'AD', features: ['HardCC', 'Engage', 'Tanky', 'Disengage'] },
        { id: 'lillia', name: 'Lillia', roles: ['Jungle'], damageType: 'AP', features: ['Mobility', 'AoE', 'Scaling', 'HighSkillCap'] },
        { id: 'lissandra', name: 'Lissandra', roles: ['Mid'], damageType: 'AP', features: ['HardCC', 'Disengage', 'Engage', 'Simple'] },
        { id: 'lucian', name: 'Lucian', roles: ['Bot'], damageType: 'AD', features: ['EarlyGame', 'Burst', 'Mobility'] },
        { id: 'lulu', name: 'Lulu', roles: ['Support'], damageType: 'AP', features: ['Shield', 'Heal', 'Utility', 'Polymorph'] },
        { id: 'lux', name: 'Lux', roles: ['Mid', 'Support'], damageType: 'AP', features: ['Poke', 'Snare', 'Burst', 'Simple'] },
        { id: 'malphite', name: 'Malphite', roles: ['Top'], damageType: 'AP', features: ['Engage', 'Tanky', 'AoE', 'Simple'] },
        { id: 'malzahar', name: 'Malzahar', roles: ['Mid'], damageType: 'AP', features: ['Scaling', 'Silence', 'Push', 'Simple'] },
        { id: 'maokai', name: 'Maokai', roles: ['Top', 'Jungle'], damageType: 'AP', features: ['Tanky', 'CC', 'Disengage', 'Engage'] },
        { id: 'masteryi', name: 'Master Yi', roles: ['Jungle'], damageType: 'AD', features: ['Scaling', 'Snowball', 'Reset', 'Simple'] },
        { id: 'milio', name: 'Milio', roles: ['Support'], damageType: 'AP', features: ['Heal', 'Disengage', 'Shield', 'Simple'] },
        { id: 'missfortune', name: 'Miss Fortune', roles: ['Bot'], damageType: 'AD', features: ['AoE', 'Poke', 'Simple', 'Scaling'] },
        { id: 'mordekaiser', name: 'Mordekaiser', roles: ['Top'], damageType: 'AP', features: ['Sustain', 'Duelist', 'Scaling'] },
        { id: 'morgana', name: 'Morgana', roles: ['Support', 'Mid'], damageType: 'AP', features: ['HardCC', 'Shield', 'AoE', 'Simple'] },
        { id: 'naafiri', name: 'Naafiri', roles: ['Mid'], damageType: 'AD', features: ['Roaming', 'Burst', 'Simple'] },
        { id: 'nami', name: 'Nami', roles: ['Support'], damageType: 'AP', features: ['Heal', 'CC', 'Engage', 'Buff'] },
        { id: 'nasus', name: 'Nasus', roles: ['Top'], damageType: 'AD', features: ['Scaling', 'Sustain', 'Simple'] },
        { id: 'nautilus', name: 'Nautilus', roles: ['Support'], damageType: 'AP', features: ['Engage', 'HardCC', 'Tanky', 'Disengage'] },
        { id: 'neeko', name: 'Neeko', roles: ['Mid', 'Support'], damageType: 'AP', features: ['HardCC', 'Disguise', 'AoE', 'Burst'] },
        { id: 'nidalee', name: 'Nidalee', roles: ['Jungle'], damageType: 'AP', features: ['Poke', 'HighSkillCap', 'Heal'] },
        { id: 'nocturne', name: 'Nocturne', roles: ['Jungle'], damageType: 'AD', features: ['GlobalSkill', 'Burst', 'Fear'] },
        { id: 'nunu', name: 'Nunu & Willump', roles: ['Jungle'], damageType: 'AP', features: ['Objective', 'AoE', 'Sustain', 'Simple'] },
        { id: 'olaf', name: 'Olaf', roles: ['Top', 'Jungle'], damageType: 'AD', features: ['Sustain', 'Duelist', 'Immune'] },
        { id: 'orianna', name: 'Orianna', roles: ['Mid'], damageType: 'AP', features: ['AoE', 'Scaling', 'Shield'] },
        { id: 'ornn', name: 'Ornn', roles: ['Top'], damageType: 'AP', features: ['Engage', 'Tanky', 'Scaling'] },
        { id: 'pantheon', name: 'Pantheon', roles: ['Top', 'Mid'], damageType: 'AD', features: ['EarlyGame', 'Burst', 'Simple'] },
        { id: 'poppy', name: 'Poppy', roles: ['Top', 'Support'], damageType: 'AD', features: ['Disengage', 'Tanky', 'Anti-Dash'] },
        { id: 'pyke', name: 'Pyke', roles: ['Support'], damageType: 'AD', features: ['Execute', 'Burst', 'Stealth', 'HighSkillCap'] },
        { id: 'qiyana', name: 'Qiyana', roles: ['Mid', 'Jungle'], damageType: 'AD', features: ['Burst', 'HighSkillCap', 'Elemental'] },
        { id: 'quinn', name: 'Quinn', roles: ['Top'], damageType: 'AD', features: ['Mobility', 'Roam', 'Simple'] },
        { id: 'rakan', name: 'Rakan', roles: ['Support'], damageType: 'AP', features: ['Engage', 'Disengage', 'Charm', 'Mobility'] },
        { id: 'rammus', name: 'Rammus', roles: ['Jungle'], damageType: 'AP', features: ['Taunt', 'Engage', 'Simple'] },
        { id: 'reksai', name: 'Rek\'Sai', roles: ['Jungle'], damageType: 'AD', features: ['Burrow', 'Vision', 'HighSkillCap'] },
        { id: 'rell', name: 'Rell', roles: ['Support'], damageType: 'AD', features: ['Engage', 'Disrupt', 'Simple'] },
        { id: 'renataglasc', name: 'Renata Glasc', roles: ['Support'], damageType: 'AP', features: ['Disengage', 'AllyBuff', 'HighSkillCap'] },
        { id: 'renekton', name: 'Renekton', roles: ['Top'], damageType: 'AD', features: ['Sustain', 'Burst', 'Simple'] },
        { id: 'rengar', name: 'Rengar', roles: ['Jungle'], damageType: 'AD', features: ['Stealth', 'Burst', 'HighSkillCap'] },
        { id: 'riven', name: 'Riven', roles: ['Top'], damageType: 'AD', features: ['Mobility', 'Burst', 'HighSkillCap'] },
        { id: 'rumble', name: 'Rumble', roles: ['Top', 'Mid'], damageType: 'AP', features: ['AoE', 'Burst', 'Overheat', 'Scaling'] },
        { id: 'ryze', name: 'Ryze', roles: ['Mid'], damageType: 'AP', features: ['Scaling', 'HighSkillCap', 'GlobalSkill'] },
        { id: 'samira', name: 'Samira', roles: ['Bot'], damageType: 'AD', features: ['Burst', 'Mobility', 'HighSkillCap'] },
        { id: 'sejuani', name: 'Sejuani', roles: ['Jungle'], damageType: 'AP', features: ['Engage', 'HardCC', 'Tanky'] },
        { id: 'senna', name: 'Senna', roles: ['Support', 'Bot'], damageType: 'AD', features: ['Poke', 'Scaling', 'Utility'] },
        { id: 'seraphine', name: 'Seraphine', roles: ['Support', 'Mid'], damageType: 'AP', features: ['Poke', 'Heal', 'Shield', 'AoE'] },
        { id: 'sett', name: 'Sett', roles: ['Top'], damageType: 'AD', features: ['Engage', 'Sustain', 'Burst', 'Simple'] },
        { id: 'shaco', name: 'Shaco', roles: ['Jungle'], damageType: 'AD', features: ['Stealth', 'Burst', 'HighSkillCap'] },
        { id: 'shen', name: 'Shen', roles: ['Top'], damageType: 'AP', features: ['GlobalSkill', 'Engage', 'Tanky', 'Disengage'] },
        { id: 'shyvana', name: 'Shyvana', roles: ['Jungle'], damageType: 'AD', features: ['Sustain', 'SplitPush', 'Scaling'] },
        { id: 'singed', name: 'Singed', roles: ['Top'], damageType: 'AP', features: ['Disrupt', 'Tanky', 'Simple'] },
        { id: 'sion', name: 'Sion', roles: ['Top'], damageType: 'AD', features: ['Engage', 'Tanky', 'HardCC', 'Simple'] },
        { id: 'sivir', name: 'Sivir', roles: ['Bot'], damageType: 'AD', features: ['Poke', 'Scaling', 'Simple'] },
        { id: 'skarner', name: 'Skarner', roles: ['Jungle'], damageType: 'AD', features: ['Engage', 'Tanky', 'Utility'] },
        { id: 'sona', name: 'Sona', roles: ['Support'], damageType: 'AP', features: ['Heal', 'Shield', 'Poke', 'Utility', 'Simple'] },
        { id: 'soraka', name: 'Soraka', roles: ['Support'], damageType: 'AP', features: ['Heal', 'Utility', 'Simple'] },
        { id: 'swain', name: 'Swain', roles: ['Mid', 'Support'], damageType: 'AP', features: ['Sustain', 'CC', 'AoE', 'Scaling'] },
        { id: 'sylas', name: 'Sylas', roles: ['Mid'], damageType: 'AP', features: ['Burst', 'HighSkillCap', 'Scaling'] },
        { id: 'syndra', name: 'Syndra', roles: ['Mid'], damageType: 'AP', features: ['Burst', 'Poke', 'HighSkillCap'] },
        { id: 'tahmkench', name: 'Tahm Kench', roles: ['Support'], damageType: 'AP', features: ['Disengage', 'Tanky', 'Shield'] },
        { id: 'taliyah', name: 'Taliyah', roles: ['Mid', 'Jungle'], damageType: 'AP', features: ['Poke', 'Utility', 'HighSkillCap'] },
        { id: 'talon', name: 'Talon', roles: ['Mid'], damageType: 'AD', features: ['Burst', 'HighSkillCap', 'Stealth'] },
        { id: 'taric', name: 'Taric', roles: ['Support'], damageType: 'AP', features: ['Heal', 'Shield', 'Tanky', 'Disengage'] },
        { id: 'teemo', name: 'Teemo', roles: ['Top', 'Support'], damageType: 'AP', features: ['Poke', 'Disrupt', 'Utility', 'Simple'] },
        { id: 'thresh', name: 'Thresh', roles: ['Support'], damageType: 'AD', features: ['HardCC', 'Engage', 'Disengage', 'Utility'] },
        { id: 'tristana', name: 'Tristana', roles: ['Bot'], damageType: 'AD', features: ['Scaling', 'Mobility', 'Burst'] },
        { id: 'trundle', name: 'Trundle', roles: ['Top', 'Jungle'], damageType: 'AD', features: ['Sustain', 'SplitPush', 'Scaling'] },
        { id: 'tryndamere', name: 'Tryndamere', roles: ['Top'], damageType: 'AD', features: ['Sustain', 'Burst', 'Simple'] },
        { id: 'twistedfate', name: 'Twisted Fate', roles: ['Mid'], damageType: 'AP', features: ['GlobalSkill', 'Poke', 'Utility'] },
        { id: 'twitch', name: 'Twitch', roles: ['Bot'], damageType: 'AD', features: ['Stealth', 'Burst', 'Scaling'] },
        { id: 'udyr', name: 'Udyr', roles: ['Jungle'], damageType: 'AD', features: ['Sustain', 'Utility', 'HighSkillCap'] },
        { id: 'urgot', name: 'Urgot', roles: ['Top'], damageType: 'AD', features: ['Burst', 'Sustain', 'Engage'] },
        { id: 'varus', name: 'Varus', roles: ['Bot'], damageType: 'AD', features: ['Poke', 'Scaling', 'Utility'] },
        { id: 'vayne', name: 'Vayne', roles: ['Bot'], damageType: 'AD', features: ['Mobility', 'Burst', 'HighSkillCap'] },
        { id: 'veigar', name: 'Veigar', roles: ['Mid'], damageType: 'AP', features: ['Scaling', 'Burst', 'HighSkillCap'] },
        { id: 'velkoz', name: 'Vel\'Koz', roles: ['Mid'], damageType: 'AP', features: ['Poke', 'AoE', 'HighSkillCap'] },
        { id: 'vi', name: 'Vi', roles: ['Jungle'], damageType: 'AD', features: ['Engage', 'Burst', 'HighSkillCap'] },
        { id: 'viego', name: 'Viego', roles: ['Jungle'], damageType: 'AD', features: ['Burst', 'Stealth', 'HighSkillCap'] },
        { id: 'viktor', name: 'Viktor', roles: ['Mid'], damageType: 'AP', features: ['Scaling', 'AoE', 'Burst'] },
        { id: 'vladimir', name: 'Vladimir', roles: ['Mid'], damageType: 'AP', features: ['Sustain', 'Scaling', 'HighSkillCap'] },
        { id: 'volibear', name: 'Volibear', roles: ['Top', 'Jungle'], damageType: 'AD', features: ['Engage', 'Tanky', 'Scaling'] },
        { id: 'warwick', name: 'Warwick', roles: ['Jungle'], damageType: 'AD', features: ['Sustain', 'Engage', 'HighSkillCap'] },
        { id: 'wukong', name: 'Wukong', roles: ['Top'], damageType: 'AD', features: ['Engage', 'Disengage', 'Burst', 'HighSkillCap'] },
        { id: 'xayah', name: 'Xayah', roles: ['Bot'], damageType: 'AD', features: ['Scaling', 'Mobility', 'Utility'] },
        { id: 'xerath', name: 'Xerath', roles: ['Mid'], damageType: 'AP', features: ['Poke', 'Scaling', 'HighSkillCap'] },
        { id: 'xinzhao', name: 'Xin Zhao', roles: ['Jungle'], damageType: 'AD', features: ['Engage', 'Burst', 'Simple'] },
        { id: 'yasuo', name: 'Yasuo', roles: ['Mid', 'Top'], damageType: 'AD', features: ['HighSkillCap', 'Mobility', 'Burst', 'Duelist'] },
        { id: 'yone', name: 'Yone', roles: ['Mid', 'Top'], damageType: 'AD', features: ['HighSkillCap', 'Mobility', 'Burst'] },
        { id: 'yorick', name: 'Yorick', roles: ['Top'], damageType: 'AD', features: ['SplitPush', 'Sustain', 'Simple'] },
        { id: 'yuumi', name: 'Yuumi', roles: ['Support'], damageType: 'AP', features: ['Shield', 'Heal', 'Utility', 'Disengage'] },
        { id: 'zac', name: 'Zac', roles: ['Jungle'], damageType: 'AP', features: ['Engage', 'Tanky', 'Disrupt'] },
        { id: 'zed', name: 'Zed', roles: ['Mid'], damageType: 'AD', features: ['Burst', 'Stealth', 'HighSkillCap'] },
        { id: 'ziggs', name: 'Ziggs', roles: ['Mid'], damageType: 'AP', features: ['Poke', 'AoE', 'Scaling'] },
        { id: 'zilean', name: 'Zilean', roles: ['Support', 'Mid'], damageType: 'AP', features: ['GlobalSkill', 'Utility', 'SpeedBuff'] },
        { id: 'zoe', name: 'Zoe', roles: ['Mid'], damageType: 'AP', features: ['Burst', 'Poke', 'HighSkillCap'] },
        { id: 'zyra', name: 'Zyra', roles: ['Support'], damageType: 'AP', features: ['Poke', 'CC', 'AoE'] },
    ];


    const championGrid = document.getElementById('champion-grid');
    const searchInput = document.getElementById('champion-search');
    const currentVersionSpan = document.getElementById('current-version');
    const evaluateButton = document.getElementById('evaluate-button');
    const teamSlots = document.querySelectorAll('.team-slot');

    let currentDDragonVersion = '14.13.1'; // デフォルトのバージョン、APIから取得するのが望ましい
    let selectedChampions = ['', '', '', '', '']; // 選択されたチャンピオンのIDをロール順に格納 (top, jungle, mid, bot, support)
    let activeSlotIndex = -1; // 現在選択中のスロットのインデックス

    // DDragonのチャンピオン画像の特殊な命名規則を扱うためのマップ
    const championImageMap = {
        'aurelionsol': 'AurelionSol',
        'drmundo': 'DrMundo',
        'jarvaniv': 'JarvanIV',
        'kogmaw': 'KogMaw',
        'leesin': 'LeeSin',
        'masteryi': 'MasterYi',
        'missfortune': 'MissFortune',
        'reksai': 'RekSai',
        'renataglasc': 'RenataGlasc',
        'wukong': 'MonkeyKing', // Wukongの特殊な内部ID
        'tahmkench': 'TahmKench',
        'twistedfate': 'TwistedFate',
        'xinzhao': 'XinZhao'
    };

    // ひらがなをカタカナに変換する関数
    function hiraToKata(str) {
        return str.replace(/[\u3041-\u3096]/g, function(match) {
            const charCode = match.charCodeAt(0) + 0x60;
            return String.fromCharCode(charCode);
        });
    }

    // 文字列の最初の文字を大文字にする関数 (画像ファイル名用)
    function capitalizeFirstLetter(string) {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // DDragonの最新バージョンをフェッチする関数
    async function fetchDDragonVersion() {
        try {
            const versionsResponse = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
            if (!versionsResponse.ok) {
                throw new Error(`HTTP error! status: ${versionsResponse.status}`);
            }
            const versions = await versionsResponse.json();
            currentDDragonVersion = versions[0]; // 配列の最初の要素が最新バージョン
            currentVersionSpan.textContent = `DDragonバージョン: ${currentDDragonVersion}`; // UIに表示
            console.log(`DDragonの現在のバージョンをフェッチしました: ${currentDDragonVersion}`);
        } catch (error) {
            console.error('DDragonのバージョンフェッチ中にエラーが発生しました:', error);
            currentVersionSpan.textContent = 'DDragonバージョン: 取得失敗 (デフォルトを使用)';
            // エラー時でも処理を続行するためにデフォルトバージョンを使用
        }
    }

    // 全チャンピオンのグリッドを生成し表示する
    function renderChampionGrid() {
        championGrid.innerHTML = ''; // グリッドをクリア

        if (champions.length === 0) {
            championGrid.innerHTML = '<p>チャンピオンデータがありません。</p>';
            console.error("チャンピオン配列が空のため、チャンピオンアイコンをレンダリングできません。");
            return;
        }

        // 名前でソート（アルファベット順）
        const sortedChampions = [...champions].sort((a, b) => a.name.localeCompare(b.name, 'ja'));

        sortedChampions.forEach(champ => {
            const championItem = document.createElement('div');
            championItem.classList.add('champion-item');
            championItem.dataset.championId = champ.id; // データ属性にチャンピオンIDを設定

            // 既に選択されているチャンピオンにはunavailableクラスを追加
            if (selectedChampions.includes(champ.id)) {
                championItem.classList.add('unavailable');
            }

            // championImageMapを使用して正しい画像ファイル名を取得
            const imageFileNameBase = championImageMap[champ.id.toLowerCase()] || capitalizeFirstLetter(champ.id);
            const iconUrl = `https://ddragon.leagueoflegends.com/cdn/${currentDDragonVersion}/img/champion/${imageFileNameBase}.png`;

            const imgElement = document.createElement('img');
            imgElement.src = iconUrl;
            imgElement.alt = `${champ.name} Icon`;
            imgElement.loading = 'lazy'; // 画像の遅延読み込み
            // エラーハンドラーをJavaScriptで直接設定 (画像が見つからない場合)
            imgElement.onerror = function() {
                console.warn(`${champ.name} (ID: ${champ.id}) の画像の読み込みに失敗しました: ${iconUrl}`);
                this.src = 'https://via.placeholder.com/90x90?text=No+Image'; // 代替画像を表示
                this.style.border = '1px solid red'; // エラーを視覚的に示す
                this.onerror = null; // エラーハンドラーを一度だけ実行し、無限ループを防ぐ
            };

            const nameElement = document.createElement('div');
            nameElement.classList.add('champion-name');
            nameElement.textContent = champ.name;

            championItem.appendChild(imgElement);
            championItem.appendChild(nameElement);

            // チャンピオン選択のクリックイベントリスナー
            championItem.addEventListener('click', () => handleChampionSelectionInGrid(champ.id));

            championGrid.appendChild(championItem);
        });
        console.log("チャンピオングリッドのレンダリングが完了しました。");
    }

    // グリッドからのチャンピオン選択ハンドリング
    function handleChampionSelectionInGrid(championId) {
        if (activeSlotIndex === -1) {
            alert('最初にチーム編成スロットを選択してください（「選択」または「変更」ボタン）。');
            console.log('アクティブなスロットがないため、チャンピオン選択を拒否しました。');
            return;
        }

        if (selectedChampions.includes(championId)) {
            // 既に選択されているチャンピオンを再度選択しようとした場合
            alert('このチャンピオンは既にチームに選択されています。');
            console.log(`チャンピオン ${champions.find(c => c.id === championId)?.name || championId} は既に選択済みです。`);
            return;
        }

        // アクティブなスロットにチャンピオンを設定
        selectedChampions[activeSlotIndex] = championId;
        console.log(`スロット ${activeSlotIndex} に ${champions.find(c => c.id === championId)?.name || championId} を設定しました。`);

        // アクティブなスロットをリセット
        setActiveSlot(-1);
        
        // UIを更新
        updateTeamDisplay();
        renderChampionGrid(); // unavailability状態を更新するため再描画
        updateEvaluateButtonState();
    }

    // チームスロットの表示を更新する
    function updateTeamDisplay() {
        teamSlots.forEach((slot, index) => {
            const championId = selectedChampions[index];
            const iconElement = slot.querySelector('.selected-champion-icon');
            const nameElement = slot.querySelector('.selected-champion-name');
            const selectButton = slot.querySelector('.select-button');
            const changeButton = slot.querySelector('.change-button');

            if (championId) {
                const champ = champions.find(c => c.id === championId);
                if (champ) {
                    const imageFileNameBase = championImageMap[champ.id.toLowerCase()] || capitalizeFirstLetter(champ.id);
                    iconElement.src = `https://ddragon.leagueoflegends.com/cdn/${currentDDragonVersion}/img/champion/${imageFileNameBase}.png`;
                    iconElement.alt = `${champ.name} Icon`;
                    nameElement.textContent = champ.name;

                    iconElement.style.display = 'inline-block';
                    nameElement.style.display = 'inline-block';
                    selectButton.style.display = 'none';
                    changeButton.style.display = 'inline-block';
                }
            } else {
                // チャンピオンが選択されていないスロット
                iconElement.src = '';
                iconElement.alt = '';
                nameElement.textContent = '';
                iconElement.style.display = 'none';
                nameElement.style.display = 'none';
                selectButton.style.display = 'inline-block';
                changeButton.style.display = 'none';
            }
        });
        console.log("チームスロットの表示が更新されました。");
    }

    // 評価ボタンの状態を更新する
    function updateEvaluateButtonState() {
        const selectedCount = selectedChampions.filter(id => id !== '').length;
        if (selectedCount === 5) {
            evaluateButton.disabled = false;
            evaluateButton.onclick = evaluateTeam; // 評価関数を紐付け
            console.log('5体のチャンピオンが選択されたため、評価ボタンが有効になりました。');
        } else {
            evaluateButton.disabled = true;
            evaluateButton.onclick = null; // 無効な状態ではクリックイベントを解除
            // 評価結果をリセット
            document.getElementById('team-summary').textContent = '5体のチャンピオンを選択すると、ここに評価が表示されます。';
            document.getElementById('good-points').innerHTML = '<li></li>';
            document.getElementById('bad-points').innerHTML = '<li></li>';
            document.getElementById('how-to-fight').innerHTML = '<li></li>';
            console.log('評価ボタンは無効です（選択チャンピオン数: ' + selectedCount + '）。');
        }
    }

    // スロットのアクティブ状態を設定する関数
    function setActiveSlot(index) {
        teamSlots.forEach((slot, i) => {
            if (i === index) {
                slot.classList.add('active');
                activeSlotIndex = index;
                console.log(`スロット ${index} をアクティブにしました。`);
            } else {
                slot.classList.remove('active');
            }
        });
        if (index === -1) {
            activeSlotIndex = -1; // 全て非アクティブにする場合
            console.log('アクティブなスロットを解除しました。');
        }
    }

    // チームスロットのイベントリスナーを設定
    teamSlots.forEach((slot, index) => {
        const selectButton = slot.querySelector('.select-button');
        const changeButton = slot.querySelector('.change-button');
        const championInfo = slot.querySelector('.champion-info'); // クリックして削除するため

        // 「選択」ボタンのクリックイベント
        selectButton.addEventListener('click', (event) => {
            event.stopPropagation(); // 親要素へのイベント伝播を防ぐ
            setActiveSlot(index);
            console.log(`スロット ${index} の「選択」ボタンがクリックされました。`);
        });

        // 「変更」ボタンのクリックイベント
        changeButton.addEventListener('click', (event) => {
            event.stopPropagation(); // 親要素へのイベント伝播を防ぐ
            // 現在選択されているチャンピオンを削除し、新しい選択を受け付ける状態にする
            selectedChampions[index] = '';
            updateTeamDisplay();
            renderChampionGrid(); // unavailability状態を更新
            updateEvaluateButtonState();
            setActiveSlot(index); // このスロットをアクティブにする
            console.log(`スロット ${index} の「変更」ボタンがクリックされました。古いチャンピオンを削除し、新しい選択を待機中。`);
        });

        // チャンピオンアイコンまたは名前がクリックされたら、そのチャンピオンを削除
        championInfo.addEventListener('click', () => {
            const championId = selectedChampions[index];
            if (championId) {
                const confirmDelete = confirm(`${champions.find(c => c.id === championId)?.name || championId} をチームから削除しますか？`);
                if (confirmDelete) {
                    selectedChampions[index] = '';
                    updateTeamDisplay();
                    renderChampionGrid(); // unavailability状態を更新
                    updateEvaluateButtonState();
                    console.log(`スロット ${index} の ${champions.find(c => c.id === championId)?.name || championId} を削除しました。`);
                }
            }
        });
    });

    // ページ読み込み完了時に実行される初期化処理
    async function initializeApp() {
        await fetchDDragonVersion(); // DDragonバージョンをフェッチ
        renderChampionGrid();        // グリッドを初期化
        updateTeamDisplay();         // 選択スロットを初期化
        updateEvaluateButtonState(); // 評価ボタンの状態を初期化
        console.log("初期セットアップが完了しました。");
    }

    // 検索機能のイベントリスナー
    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            let searchText = event.target.value.toLowerCase();
            // ひらがなをカタカナに変換して検索
            searchText = hiraToKata(searchText);

            const championItems = document.querySelectorAll('.champion-item');

            championItems.forEach(item => {
                const championName = item.querySelector('.champion-name')?.textContent.toLowerCase();
                const championNameKata = hiraToKata(championName || ''); // チャンピオン名もカタカナに変換して比較

                if (championNameKata.includes(searchText)) {
                    item.style.display = 'flex'; // 表示
                } else {
                    item.style.display = 'none'; // 非表示
                }
            });
            console.log(`検索ワード: "${event.target.value}" でチャンピオンをフィルタリングしました。`);
        });
    } else {
        console.error('検索入力フィールド (#champion-search) が見つかりません。');
    }

    // チーム評価ロジック
    function evaluateTeam() {
        const selectedChampIds = selectedChampions.filter(value => value !== '');
        console.log('チーム評価を開始します。選択されたチャンピオンID:', selectedChampIds);

        const goodPoints = [];
        const badPoints = [];
        const howToFight = [];
        let summary = '';

        if (selectedChampIds.length !== 5) {
            document.getElementById('team-summary').textContent = 'エラー: 5体のチャンピオンを選択してください。';
            document.getElementById('good-points').innerHTML = '<li></li>';
            document.getElementById('bad-points').innerHTML = '<li></li>';
            document.getElementById('how-to-fight').innerHTML = '<li></li>';
            console.error('評価に失敗しました: チャンピオンが5体選択されていません。');
            return;
        }

        // 重複チェック (UIで制御されるため基本不要だが、念のため)
        const uniqueChamps = new Set(selectedChampIds);
        if (uniqueChamps.size !== 5) {
            document.getElementById('team-summary').textContent = 'エラー: 同じチャンピオンを複数選択することはできません。';
            document.getElementById('good-points').innerHTML = '<li></li>';
            document.getElementById('bad-points').innerHTML = '<li></li>';
            document.getElementById('how-to-fight').innerHTML = '<li></li>';
            console.error('評価に失敗しました: 同じチャンピオンが複数選択されています。');
            return;
        }

        const selectedChamps = selectedChampIds.map(id => champions.find(champ => champ.id === id)).filter(Boolean); // null/undefinedを除外
        console.log('評価対象チャンピオン:', selectedChamps.map(c => c.name));

        // --- チーム構成の分析 ---
        const roles = { Top: 0, Jungle: 0, Mid: 0, Bot: 0, Support: 0 };
        let adCount = 0;
        let apCount = 0;
        let hasHardCC = 0;
        let hasSoftCC = 0;
        let hasEngage = 0;
        let hasDisengage = 0;
        let hasScaling = 0;
        let hasEarlyGameStrong = 0;
        let hasPoke = 0;
        let hasHealShield = 0;
        let hasAoE = 0;
        let hasSplitPush = 0;
        let hasMobility = 0;
        let hasGlobalSkill = 0;
        let hasStealth = 0;
        let hasTanky = 0;
        let hasDuelist = 0;
        let hasBurst = 0;
        let hasSimple = 0;
        let hasHighSkillCap = 0;

        selectedChamps.forEach(champ => {
            if (champ.roles) {
                if (champ.roles.includes('Top')) roles.Top++;
                if (champ.roles.includes('Jungle')) roles.Jungle++;
                if (champ.roles.includes('Mid')) roles.Mid++;
                if (champ.roles.includes('Bot')) roles.Bot++;
                if (champ.roles.includes('Support')) roles.Support++;
            }

            if (champ.damageType === 'AD') adCount++;
            else if (champ.damageType === 'AP') apCount++;
            else if (champ.damageType === 'Mixed') { adCount++; apCount++; }

            if (champ.features) {
                if (champ.features.includes('HardCC')) hasHardCC++;
                if (champ.features.includes('SoftCC')) hasSoftCC++;
                if (champ.features.includes('Engage')) hasEngage++;
                if (champ.features.includes('Disengage')) hasDisengage++;
                if (champ.features.includes('Scaling')) hasScaling++;
                if (champ.features.includes('EarlyGame')) hasEarlyGameStrong++;
                if (champ.features.includes('Poke')) hasPoke++;
                if (champ.features.includes('HealShield') || champ.features.includes('Heal') || champ.features.includes('Shield')) hasHealShield++;
                if (champ.features.includes('AoE')) hasAoE++;
                if (champ.features.includes('SplitPush')) hasSplitPush++;
                if (champ.features.includes('Mobility') || champ.features.includes('Speed')) hasMobility++;
                if (champ.features.includes('GlobalSkill')) hasGlobalSkill++;
                if (champ.features.includes('Stealth')) hasStealth++;
                if (champ.features.includes('Tanky')) hasTanky++;
                if (champ.features.includes('Duelist')) hasDuelist++;
                if (champ.features.includes('Burst')) hasBurst++;
                if (champ.features.includes('Simple')) hasSimple++;
                if (champ.features.includes('HighSkillCap')) hasHighSkillCap++;
            }
        });
        console.log('チャンピオンの特性を分析しました。');

        // --- 評価ロジック ---

        // ロールバランス
        let filledRolesCount = 0;
        if (roles.Top > 0) filledRolesCount++;
        if (roles.Jungle > 0) filledRolesCount++;
        if (roles.Mid > 0) filledRolesCount++;
        if (roles.Bot > 0) filledRolesCount++;
        if (roles.Support > 0) filledRolesCount++;

        if (filledRolesCount === 5) {
            summary += 'ロールバランスは完璧です。各レーンに適切なチャンピオンが配置されています。';
            goodPoints.push('各レーンが安定しやすく、序盤からバランスの取れた戦いが可能です。');
        } else if (filledRolesCount >= 4) {
            summary += 'ロールバランスは良好ですが、特定のロールが欠けている可能性があります。';
            badPoints.push('特定のロールが欠けているため、試合展開によっては柔軟性に欠けるかもしれません。');
            howToFight.push('欠けているロールの役割を他のチャンピオンでカバーすることを意識しましょう。');
        } else {
            summary += 'ロールバランスに大きな偏りがあります。レーニングフェーズで苦戦する可能性が高いです。';
            badPoints.push('ロールバランスの偏りが大きく、特定のレーンが非常に弱くなる可能性があります。');
            howToFight.push('ロールバランスの弱点を理解し、序盤のレーニングを乗り切るための戦略を立てましょう。相手の構成次第では試合序盤で大きな不利を背負う可能性があります。');
        }

        // ダメージタイプ
        if (adCount >= 4 && apCount <= 1) {
            summary += 'ADダメージに大きく偏った構成です。';
            badPoints.push('魔法ダメージが非常に不足しており、敵が物理防御を積むとダメージが出にくくなります。');
            howToFight.push('敵が物理防御を積んだら、物理防御貫通アイテムを優先し、魔法ダメージチャンピオンが少量のAPアイテムを積むことも検討しましょう。');
        } else if (apCount >= 4 && adCount <= 1) {
            summary += 'APダメージに大きく偏った構成です。';
            badPoints.push('物理ダメージが非常に不足しており、敵が魔法防御を積むとダメージが出にくくなります。');
            howToFight.push('敵が魔法防御を積んだら、魔法防御貫通アイテムを優先し、物理ダメージチャンピオンが少量のADアイテムを積むことも検討しましょう。');
        } else if (adCount >= 2 && apCount >= 2) {
            summary += '物理・魔法ダメージのバランスは良好です。';
            goodPoints.push('物理と魔法ダメージのバランスが取れており、敵がどちらか一方に防御を偏らせることを防げます。');
        } else {
            summary += 'ダメージタイプにやや偏りがあります。';
            badPoints.push('ダメージタイプが偏ると、敵が防御アイテムを積みやすくなります。');
            howToFight.push('敵の防御アイテムビルドを見て、味方のダメージタイプが有効なターゲットに集中しましょう。');
        }

        // CC (ハードCC重視)
        if (hasHardCC >= 2) {
            goodPoints.push('ハードCC（スタン、ノックアップなど）が豊富で、敵の重要なターゲットを長時間拘束できます。');
            howToFight.push('豊富なハードCCを活かして、有利な集団戦を仕掛けたり、敵のキャリーを孤立させましょう。確実なピックアップが可能です。');
        } else if (hasHardCC === 1 && hasSoftCC >= 2) {
            goodPoints.push('ハードCCは少ないものの、ソフトCC（スロー、サイレンスなど）で敵の動きを制限できます。');
            howToFight.push('ソフトCCで敵の動きを鈍らせ、味方のスキルショットやDPSチャンピオンの攻撃を支援しましょう。');
        } else if (hasHardCC === 0) {
            badPoints.push('ハードCCが非常に不足しているため、敵の機動力のあるチャンピオンや強力なエンゲージに対応しづらい可能性があります。');
            howToFight.push('CCの少なさを補うため、ポジショニングやオブジェクトコントロールを徹底し、敵のエンゲージを回避する立ち回りが重要です。');
        }

        // エンゲージ vs ディスエンゲージ
        if (hasEngage >= 2 && hasDisengage >= 1) {
            goodPoints.push('強力なエンゲージと、ある程度のディスエンゲージ能力を兼ね備えています。戦闘の主導権を握りやすいです。');
            howToFight.push('積極的に戦闘を仕掛けつつ、危険な状況からは味方を守る、柔軟な戦い方が可能です。');
        } else if (hasEngage >= 3) {
            goodPoints.push('非常に強力なエンゲージ能力があり、自分たちから有利な集団戦を強制できます。');
            badPoints.push('ディスエンゲージ能力が不足しているため、敵のカウンターエンゲージや、不利な状況での戦闘からは逃げにくいです。');
            howToFight.push('有利な状況を見極めて積極的に戦闘を仕掛けましょう。一度戦闘が始まると後戻りしにくいので、仕掛けるタイミングが重要です。');
        } else if (hasDisengage >= 3) {
            goodPoints.push('優れたディスエンゲージ能力があり、敵のエンゲージをいなし、味方を守るのが得意です。');
            badPoints.push('エンゲージ能力が不足しているため、自分たちから戦闘を仕掛けるのが難しいかもしれません。');
            howToFight.push('敵のミスを誘い、カウンターエンゲージを狙いましょう。安全にファームして、オブジェクト周辺でディフェンシブに戦うのが得意です。');
        } else { // どちらも不足している場合
            badPoints.push('エンゲージ、ディスエンゲージともに不足しており、戦闘の開始や終了が難しい可能性があります。');
            howToFight.push('味方同士の連携を密にし、相手の出方を見て慎重に動きましょう。集団戦は敵に仕掛けられる形になりがちです。');
        }

        // ゲームフェーズの強み
        if (hasScaling >= 3 && hasEarlyGameStrong <= 1) {
            goodPoints.push('ゲーム後半に非常に強力になる構成（Late Game Comp）です。');
            badPoints.push('序盤は脆い可能性があり、有利を奪われると厳しい展開になることがあります。');
            howToFight.push('序盤は無理をせず、安全にファームしてパワースパイクを目指しましょう。後半の集団戦やオブジェクトファイトで逆転を狙えます。');
        } else if (hasEarlyGameStrong >= 3 && hasScaling <= 1) {
            goodPoints.push('序盤から強力な圧力をかけられる構成（Early Game Comp）です。');
            badPoints.push('ゲーム後半になると敵の構成にスケールで劣る可能性があります。');
            howToFight.push('序盤から積極的にキルやオブジェクトを取り、有利を拡大しましょう。後半になる前にゲームを終わらせることを目指します。');
        } else {
            howToFight.push('序盤と後半のバランスが取れています。状況に応じて柔軟な戦い方が可能です。');
        }

        // その他の特徴
        if (hasPoke >= 2) {
            goodPoints.push('遠距離からのポークダメージが豊富で、ハラスやシージ戦が得意です。');
            howToFight.push('オブジェクトを攻める際や敵との睨み合いで、一方的にダメージを与え有利を作りましょう。');
        }
        if (hasHealShield >= 1) {
            goodPoints.push('回復やシールドがあり、レーニングや集団戦での継戦能力が高いです。');
        }
        if (hasAoE >= 3) {
            goodPoints.push('AoE（範囲攻撃）スキルが豊富で、集団戦でのダメージ量が高いです。');
            howToFight.push('集団戦では敵が固まっているところにAoEスキルを命中させ、一気に壊滅させましょう。');
        }
        if (hasSplitPush >= 1 && selectedChamps.some(c => c.roles?.includes('Top'))) { // roles?. で存在チェック
            goodPoints.push('スプリットプッシュを得意とするチャンピオンが含まれており、サイドレーンから圧力をかけられます。');
            howToFight.push('スプリットプッシュでサイドレーンを押し、敵の注意を引きつけ、残りの味方で有利な集団戦やオブジェクト獲得を狙いましょう。');
        }
        if (hasMobility >= 3) {
            goodPoints.push('機動力の高いチャンピオンが多く、マップ移動や戦闘での立ち回りに優れています。');
            howToFight.push('機動力を活かして、サイドレーンのプッシュやロームを積極的に行い、マップ全体で有利を作りましょう。');
        } else if (hasMobility <= 1) {
             badPoints.push('全体的に機動力が低いため、敵のエンゲージから逃げたり、有利な位置取りをするのが難しいかもしれません。');
             howToFight.push('機動力の低さを補うため、ワードでの視界確保や味方との連携を密にしましょう。');
        }
        if (hasGlobalSkill >= 1) {
            goodPoints.push('グローバルスキルを持つチャンピオンがおり、離れた場所から味方を支援したり、オブジェクトにプレッシャーをかけられます。');
            howToFight.push('グローバルスキルを活かして、味方のレーンを助けたり、人数不利な状況を覆しましょう。');
        }
        if (hasStealth >= 1) {
            goodPoints.push('ステルスチャンピオンがおり、敵の不意を突く奇襲や、情報戦で有利に立てます。');
            howToFight.push('ステルスを活かして敵のキャリーを狙ったり、視界の取れていない場所から有利な戦闘を仕掛けましょう。');
        }
        if (hasTanky >= 2) {
            goodPoints.push('フロントラインを担えるタンクチャンピオンが複数おり、味方のキャリーを守りやすいです。');
            howToFight.push('集団戦ではタンクが前線でダメージを受け、CCで敵を妨害し、後衛の味方が安全にダメージを出せるようにしましょう。');
        } else if (hasTanky === 0) {
            badPoints.push('タンクチャンピオンがいないため、フロントラインが脆く、味方のキャリーが狙われやすいです。');
            howToFight.push('タンクがいない分、慎重なポジショニングと敵のエンゲージをいなすディスエンゲージが重要になります。');
        }
        if (hasDuelist >= 2) {
            goodPoints.push('デュエリスト特性を持つチャンピオンが複数おり、少人数戦やサイドレーンでの有利形成が得意です。');
            howToFight.push('積極的にサイドレーンを押し、1v1や1v2の状況を作り出し、敵を分断させましょう。');
        }
        if (hasBurst >= 3) {
            goodPoints.push('バーストダメージが非常に高く、敵のチャンピオンを一瞬で倒す能力があります。');
            howToFight.push('敵のキーチャンピオンをフォーカスし、一気にバーストダメージで倒し切ることを目指しましょう。');
        }
        if (hasHighSkillCap >= 3 && hasSimple <= 1) {
            badPoints.push('高難度チャンピオンが多く、チーム全体の練度によってはパフォーマンスが安定しない可能性があります。');
            howToFight.push('連携が非常に重要になります。練習を重ねてそれぞれのチャンピオンのポテンシャルを最大限に引き出しましょう。');
        } else if (hasSimple >= 3 && hasHighSkillCap <= 1) {
            goodPoints.push('比較的シンプルなチャンピオンが多く、初心者にも扱いやすい構成です。');
            howToFight.push('シンプルな構成だからこそ、基本的なLoLの動きを忠実に実行し、安定したゲームプレイを目指しましょう。');
        }

        // 結果の表示
        document.getElementById('team-summary').textContent = summary;
        document.getElementById('good-points').innerHTML = goodPoints.length > 0 ? goodPoints.map(point => `<li>${point}</li>`).join('') : '<li>特筆すべき良い点はありません。</li>';
        document.getElementById('bad-points').innerHTML = badPoints.length > 0 ? badPoints.map(point => `<li>${point}</li>`).join('') : '<li>特筆すべき悪い点はありません。</li>';
        document.getElementById('how-to-fight').innerHTML = howToFight.length > 0 ? howToFight.map(point => `<li>${point}</li>`).join('') : '<li>一般的なLoLの戦い方を意識しましょう。</li>';
        console.log('チーム評価が完了し、結果が表示されました。');
    }

    // アプリケーションの初期化を実行
    initializeApp();
});