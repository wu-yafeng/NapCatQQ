function _0x4866(_0x4db6fc,_0x39ec2d){const _0x1ecfee=_0x1ecf();return _0x4866=function(_0x4866a3,_0x5b71f5){_0x4866a3=_0x4866a3-0x1c4;let _0x5522d2=_0x1ecfee[_0x4866a3];return _0x5522d2;},_0x4866(_0x4db6fc,_0x39ec2d);}const _0x1bd8e6=_0x4866;(function(_0x3ee66c,_0x1e432b){const _0x536fde=_0x4866,_0x4a1df1=_0x3ee66c();while(!![]){try{const _0x1501a6=parseInt(_0x536fde(0x1f2))/0x1*(parseInt(_0x536fde(0x1dc))/0x2)+-parseInt(_0x536fde(0x1f1))/0x3+-parseInt(_0x536fde(0x1d4))/0x4*(-parseInt(_0x536fde(0x1fe))/0x5)+parseInt(_0x536fde(0x1e9))/0x6*(-parseInt(_0x536fde(0x1c5))/0x7)+parseInt(_0x536fde(0x20f))/0x8+-parseInt(_0x536fde(0x213))/0x9+-parseInt(_0x536fde(0x202))/0xa*(parseInt(_0x536fde(0x1fb))/0xb);if(_0x1501a6===_0x1e432b)break;else _0x4a1df1['push'](_0x4a1df1['shift']());}catch(_0x460b73){_0x4a1df1['push'](_0x4a1df1['shift']());}}}(_0x1ecf,0x29414));import{AtType,ElementType,FaceIndex,FaceType,PicType}from'../entities';import{promises as _0x2cf348}from'node:fs';import _0x49cf5e from'fluent-ffmpeg';import{NTQQFileApi}from '@/core/apis/file';import{calculateFileMD5,isGIF}from'@/common/utils/file';function _0x1ecf(){const _0x3253ab=['reply','time','14jJvwKS','unlink','REPLY','ElxSe','path','Yglco','mmgoc','FACE','FILE','stat','VIDEO','bSnyC','jpg','gVSbN','Thumb','796vIVGcO','then','uploadFile','获取视频信息失败','sep','notAt','wQIYS','ARK','188PbpQKv','_0.png','join','ptt','rps','error','set','replace','dirname','height','ark','rwVlt','toString','431646SpNkAW','[骰子]','PTT','normal','ECaJK','copyFile','ciuGx','gif','225159JOKyrJ','1533fZSmHo','QIPmY','iOnKx','ypRyz','mp4','MARKDOWN','face','Ori','catch','11YGzNgq','screenshots','TEXT','7455YJBANQ','dice','XMumh','UjsQW','875930chaAyE','文件异常，大小为0','WRGbJ','file','KsRNz','pic','markdown','获取视频封面失败，使用默认封面','width','getImageSize','peYgf','Tshtu','YTFHY','2525496RZiOuM','writeFile','NPPeY','CaaAv','2528910BlpfgO'];_0x1ecf=function(){return _0x3253ab;};return _0x1ecf();}import{log}from'@/common/utils/log';import{defaultVideoThumb,getVideoInfo}from'@/common/utils/video';import{encodeSilk}from'@/common/utils/audio';export class SendMsgElementConstructor{static['text'](_0x3afe95){const _0x1a9f16=_0x4866;return{'elementType':ElementType['TEXT'],'elementId':'','textElement':{'content':_0x3afe95,'atType':AtType[_0x1a9f16(0x1d9)],'atUid':'','atTinyId':'','atNtUid':''}};}static['at'](_0x1d0fcb, _0x2ebb8e, _0x1b61a5, _0x5b7dde){const _0x8ee597=_0x4866;return{'elementType':ElementType[_0x8ee597(0x1fd)],'elementId':'','textElement':{'content':'@'+_0x5b7dde,'atType':_0x1b61a5,'atUid':_0x1d0fcb,'atTinyId':'','atNtUid':_0x2ebb8e}};}static[_0x1bd8e6(0x214)](_0x2d43bb, _0x5bf5ce, _0x12ee77, _0x27d4f2){const _0x13a586=_0x1bd8e6;return{'elementType':ElementType[_0x13a586(0x1c7)],'elementId':'','replyElement':{'replayMsgSeq':_0x2d43bb,'replayMsgId':_0x5bf5ce,'senderUin':_0x12ee77,'senderUinStr':_0x27d4f2}};}static async[_0x1bd8e6(0x207)](_0x359976, _0x1e14ab='', _0x5efaf6=0x0){const _0x4209ba=_0x1bd8e6,_0x23ff73={'mmgoc':function(_0x4d70a7, _0x31ee3f){return _0x4d70a7===_0x31ee3f;},'NPPeY':'文件异常，大小为0','vvsoa':function(_0x25667e, _0xd4ec2c){return _0x25667e(_0xd4ec2c);},'bSnyC':function(_0x5d685b, _0x321d44, _0x5bb07e){return _0x5d685b(_0x321d44,_0x5bb07e);},'gVSbN':'图片信息'},{md5:_0x3ce3a0,fileName:_0x545a67,path:_0x28967c,fileSize:_0x3733d2}=await NTQQFileApi[_0x4209ba(0x1d6)](_0x359976,ElementType['PIC'],_0x5efaf6);if(_0x23ff73[_0x4209ba(0x1cb)](_0x3733d2,0x0))throw _0x23ff73[_0x4209ba(0x211)];const _0x2b0986=await NTQQFileApi[_0x4209ba(0x20b)](_0x359976),_0x528fea={'md5HexStr':_0x3ce3a0,'fileSize':_0x3733d2[_0x4209ba(0x1e8)](),'picWidth':_0x2b0986?.[_0x4209ba(0x20a)],'picHeight':_0x2b0986?.[_0x4209ba(0x1e5)],'fileName':_0x545a67,'sourcePath':_0x28967c,'original':!![],'picType':_0x23ff73['vvsoa'](isGIF,_0x359976)?PicType[_0x4209ba(0x1f0)]:PicType[_0x4209ba(0x1d1)],'picSubType':_0x5efaf6,'fileUuid':'','fileSubId':'','thumbFileSize':0x0,'summary':_0x1e14ab};return _0x23ff73[_0x4209ba(0x1d0)](log,_0x23ff73[_0x4209ba(0x1d2)],_0x528fea),{'elementType':ElementType['PIC'],'elementId':'','picElement':_0x528fea};}static async[_0x1bd8e6(0x205)](_0x110e43, _0x3274c3=''){const _0x5ca41f=_0x1bd8e6,_0x80093={'WRGbJ':_0x5ca41f(0x203)},{md5:_0x13bbc0,fileName:_0x415d5b,path:_0x4eb25f,fileSize:_0x5a5310}=await NTQQFileApi[_0x5ca41f(0x1d6)](_0x110e43,ElementType[_0x5ca41f(0x1cd)]);if(_0x5a5310===0x0)throw _0x80093[_0x5ca41f(0x204)];const _0x4e6132={'elementType':ElementType[_0x5ca41f(0x1cd)],'elementId':'','fileElement':{'fileName':_0x3274c3||_0x415d5b,'filePath':_0x4eb25f,'fileSize':_0x5a5310[_0x5ca41f(0x1e8)]()}};return _0x4e6132;}static async['video'](_0x435cbd, _0xf03860='', _0x3def75=''){const _0x34ba9a=_0x1bd8e6,_0x471387={'rwVlt':function(_0x523789, _0x4b3871, _0x403493){return _0x523789(_0x4b3871,_0x403493);},'iOnKx':_0x34ba9a(0x209),'Tshtu':function(_0x1b9701, _0x45801e){return _0x1b9701(_0x45801e);},'peYgf':'end','ElxSe':_0x34ba9a(0x1e1),'YRoHF':function(_0x60fc53, _0xb8f7f7){return _0x60fc53+_0xb8f7f7;},'ciuGx':function(_0x26b456, _0xedd2b2){return _0x26b456+_0xedd2b2;},'UcZXn':_0x34ba9a(0x203),'ECaJK':_0x34ba9a(0x1c9),'Yglco':_0x34ba9a(0x1f6),'KJkrr':function(_0x118845, _0x497911, _0x5a1465){return _0x118845(_0x497911,_0x5a1465);},'ypRyz':_0x34ba9a(0x1d7),'CaaAv':function(_0x1439f1, _0x4d46a5){return _0x1439f1(_0x4d46a5);},'YTFHY':function(_0x38afd6, _0x4f8e8d){return _0x38afd6||_0x4f8e8d;}},{fileName:_0x480535,path:_0xc51538,fileSize:_0x507eca,md5:_0x43797f}=await NTQQFileApi['uploadFile'](_0x435cbd,ElementType[_0x34ba9a(0x1cf)]);if(_0x507eca===0x0)throw _0x471387['UcZXn'];const _0x205145=require(_0x471387[_0x34ba9a(0x1ed)]);let _0x29946b=_0xc51538[_0x34ba9a(0x1e3)](_0x205145['sep']+_0x34ba9a(0x1f9)+_0x205145['sep'],_0x205145[_0x34ba9a(0x1d8)]+_0x34ba9a(0x1d3)+_0x205145[_0x34ba9a(0x1d8)]);_0x29946b=_0x205145[_0x34ba9a(0x1e4)](_0x29946b);let _0xd24f2={'width':0x780,'height':0x438,'time':0xf,'format':_0x471387[_0x34ba9a(0x1ca)],'size':_0x507eca,'filePath':_0x435cbd};try{_0xd24f2=await _0x471387['Tshtu'](getVideoInfo,_0xc51538),_0x471387['KJkrr'](log,'视频信息',_0xd24f2);}catch(_0x46da71){_0x471387[_0x34ba9a(0x1e7)](log,_0x471387[_0x34ba9a(0x1f5)],_0x46da71);}const _0x279c44=new Promise((_0x4ed102, _0x50946c)=>{const _0x5b6415=_0x34ba9a,_0x56cf28={'QIPmY':function(_0x27bd6c, _0x38ebe7){const _0x3ce24b=_0x4866;return _0x471387[_0x3ce24b(0x20d)](_0x27bd6c,_0x38ebe7);},'wQIYS':function(_0x555387, _0x4fd96b){return _0x555387(_0x4fd96b);}},_0x431a51=_0x43797f+_0x5b6415(0x1dd),_0x35e1b2=_0x205145[_0x5b6415(0x1de)](_0x29946b,_0x431a51);_0x471387[_0x5b6415(0x20d)](_0x49cf5e,_0x435cbd)['on'](_0x471387[_0x5b6415(0x20c)],()=>{})['on'](_0x471387[_0x5b6415(0x1c8)], _0x5b3608=>{const _0x470c0d=_0x5b6415;_0x471387[_0x470c0d(0x1e7)](log,_0x471387[_0x470c0d(0x1f4)],_0x5b3608),_0x3def75?_0x2cf348[_0x470c0d(0x1ee)](_0x3def75,_0x35e1b2)['then'](()=>{const _0x4e5ccc=_0x470c0d;_0x56cf28[_0x4e5ccc(0x1f3)](_0x4ed102,_0x35e1b2);})['catch'](_0x50946c):_0x2cf348[_0x470c0d(0x210)](_0x35e1b2,defaultVideoThumb)['then'](()=>{const _0x52963b=_0x470c0d;_0x56cf28[_0x52963b(0x1da)](_0x4ed102,_0x35e1b2);})[_0x470c0d(0x1fa)](_0x50946c);})[_0x5b6415(0x1fc)]({'timestamps':[0x0],'filename':_0x431a51,'folder':_0x29946b,'size':_0x471387['YRoHF'](_0x471387[_0x5b6415(0x1ef)](_0xd24f2[_0x5b6415(0x20a)],'x'),_0xd24f2[_0x5b6415(0x1e5)])})['on'](_0x471387['peYgf'],()=>{const _0x3e6bdd=_0x5b6415;_0x471387[_0x3e6bdd(0x20d)](_0x4ed102,_0x35e1b2);});}),_0x3ed7f9=new Map(),_0x2f29ce=await _0x279c44,_0x5c8287=(await _0x2cf348[_0x34ba9a(0x1ce)](_0x2f29ce))['size'];_0x3ed7f9[_0x34ba9a(0x1e2)](0x0,_0x2f29ce);const _0x3a53a1=await _0x471387[_0x34ba9a(0x212)](calculateFileMD5,_0x2f29ce),_0x4bba54={'elementType':ElementType[_0x34ba9a(0x1cf)],'elementId':'','videoElement':{'fileName':_0x471387[_0x34ba9a(0x20e)](_0xf03860,_0x480535),'filePath':_0xc51538,'videoMd5':_0x43797f,'thumbMd5':_0x3a53a1,'fileTime':_0xd24f2[_0x34ba9a(0x1c4)],'thumbPath':_0x3ed7f9,'thumbSize':_0x5c8287,'thumbWidth':_0xd24f2['width'],'thumbHeight':_0xd24f2[_0x34ba9a(0x1e5)],'fileSize':''+_0x507eca}};return _0x4bba54;}static async[_0x1bd8e6(0x1df)](_0x1d7392){const _0x32ca39=_0x1bd8e6,_0x48bd8c={'UjsQW':function(_0x2e2525, _0x22bfe1){return _0x2e2525(_0x22bfe1);},'XMumh':_0x32ca39(0x203)},{converted:_0x9afc7,path:_0x1d7b12,duration:_0x997e15}=await _0x48bd8c[_0x32ca39(0x201)](encodeSilk,_0x1d7392),{md5:_0x3278d7,fileName:_0x3c1de8,path:_0x1ec354,fileSize:_0x47b439}=await NTQQFileApi['uploadFile'](_0x1d7b12,ElementType[_0x32ca39(0x1eb)]);if(_0x47b439===0x0)throw _0x48bd8c[_0x32ca39(0x200)];return _0x9afc7&&_0x2cf348[_0x32ca39(0x1c6)](_0x1d7b12)[_0x32ca39(0x1d5)](),{'elementType':ElementType['PTT'],'elementId':'','pttElement':{'fileName':_0x3c1de8,'filePath':_0x1ec354,'md5HexStr':_0x3278d7,'fileSize':_0x47b439,'duration':_0x997e15||0x1,'formatType':0x1,'voiceType':0x1,'voiceChangeType':0x0,'canConvert2Text':!![],'waveAmplitudes':[0x0,0x12,0x9,0x17,0x10,0x11,0x10,0xf,0x2c,0x11,0x18,0x14,0xe,0xf,0x11],'fileSubId':'','playState':0x1,'autoConvertText':0x0}};}static[_0x1bd8e6(0x1f8)](_0x3fb4e1){const _0x41ff63=_0x1bd8e6,_0x11dec0={'KsRNz':function(_0x2af383, _0x13107f){return _0x2af383<_0x13107f;}};return{'elementType':ElementType['FACE'],'elementId':'','faceElement':{'faceIndex':_0x3fb4e1,'faceType':_0x11dec0[_0x41ff63(0x206)](_0x3fb4e1,0xde)?FaceType[_0x41ff63(0x1ec)]:FaceType['normal2']}};}static[_0x1bd8e6(0x1ff)](_0x1ca2c5){const _0x2ba664=_0x1bd8e6,_0x287d65={'KQtHH':_0x2ba664(0x1ea)};return{'elementType':ElementType[_0x2ba664(0x1cc)],'elementId':'','faceElement':{'faceIndex':FaceIndex[_0x2ba664(0x1ff)],'faceType':FaceType['dice'],'faceText':_0x287d65['KQtHH'],'packId':'1','stickerId':'33','sourceType':0x1,'stickerType':0x2,'surpriseId':''}};}static[_0x1bd8e6(0x1e0)](_0x430969){const _0x2fd11c=_0x1bd8e6;return{'elementType':ElementType[_0x2fd11c(0x1cc)],'elementId':'','faceElement':{'faceIndex':FaceIndex['RPS'],'faceText':'[包剪锤]','faceType':0x3,'packId':'1','stickerId':'34','sourceType':0x1,'stickerType':0x2,'surpriseId':''}};}static[_0x1bd8e6(0x1e6)](_0x5cfa7b){const _0x2f67c9=_0x1bd8e6;return{'elementType':ElementType[_0x2f67c9(0x1db)],'elementId':'','arkElement':{'bytesData':_0x5cfa7b,'linkInfo':null,'subElementType':null}};}static[_0x1bd8e6(0x208)](_0x206193){const _0x26e8e9=_0x1bd8e6;return{'elementType':ElementType[_0x26e8e9(0x1f7)],'elementId':'','markdownElement':{'content':_0x206193}};}}
