const request = require('request')
const fs = require('fs')
const options = {
    url: 'https://www.bilibili.com/ranking/bangumi/13/0/3',
    //url: 'https://www.bilibili.com/anime/timeline/?spm_id_from=333.6.b_7375626e6176.6',
    method: 'GET',
    gzip: true,
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Cache-Control': 'no-cache',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'Keep-Alive',
        'Cookie': '_uuid=9E17B0E1-2BF6-C0A5-FC8A-779C83218C0660712infoc; buvid3=B2147B88-7F9E-485E-90D9-799347F53F57190942infoc; LIVE_BUVID=AUTO1115739856685549; sid=i69hkjab; rpdid=|(JY))R~u~uu0J\'ul~Jm)mm|m; CURRENT_FNVAL=16; stardustvideo=1; im_notify_type_431060191=0; laboratory=1-1; CURRENT_QUALITY=64; bp_t_offset_431060191=334875232819904632; INTVER=1; stardustpgcv=0606; Hm_lvt_8a6e55dbd2870f0f5bc9194cddf32a02=1576847987; Hm_lpvt_8a6e55dbd2870f0f5bc9194cddf32a02=1576847987',
        'Pragma': 'no-cache',
        'Upgrade-Insecure-Requests': 1,
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-User': '?1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36 Edg/79.0.309.54'
    }
}

request(options, (error, response, body) => {
    fs.writeFileSync('a.html',body)
})