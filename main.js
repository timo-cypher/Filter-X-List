let link = "";
document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  link = document.querySelector("#link").value;
  console.log(link);
  document
    .querySelector(".copy-default")
    .setAttribute("style", "color:black; background-color:#f3b200;");

  executeFilter();
});

let links = ` Lukas.Bnb trên X (https://x.com/0xlukasbnb/status/1719545455787590007?s=46)
2. KaiYo trên X (https://twitter.com/Kaikawai95/status/1719512660281307379?t=n85KKEoSHiWB-hBikvFPbg&s=19)
3.https://x.com/0xthang/status/1719326633705030139?s=46
4. Tweet from @hodanghuyzn1992 (1719…974) (https://twitter.com/hodanghuyzn1992/status/1719380364911955974?t=7l7BPlzSAthhLDCjL4DL_w&s=19)
(https://twitter.com/hoangmycd4545/status/1719487796585361508?t=a0QwO8Ovh46olQdx15MjCw&s=19)
6.https://x.com/tannguyeneth/status/1719505866326675627?s=20
7. Tweet from @kanaadaily (1719…815) (https://twitter.com/kanaadaily/status/1719540316255215815)
8. Tweet from @Rothschild11111 (1719…599) (https://twitter.com/Rothschild11111/status/1719294552643899599?t=bFet1_Gp9AWpJJylMxXu0Q&s=19)
9.https://x.com/mnhtr247/status/1719507132943675451?s=46
9. https://x.com/duyphong_bnb/status/1719517630107926561?s=46
9. https://x.com/quilix_vu/status/1719550549006369145?s=20
10.https://x.com/trinhmono/status/1719549306729070723?s=46
(https://x.com/vincentvnth/status/1719549292657135688?s=20)
12.https://x.com/vuhuycuong94/status/1719534465414996195?s=46 no ads, vui lòng ko click
(https://twitter.com/SnakeSamurai_/status/1719544984188469519)
14. Tweet from @HiepGa1809 (1719…520) (https://twitter.com/HiepGa1809/status/1719141373730013520)
15.https://x.com/OtterGiggles/status/1719531858684449014?s=20
16.https://x.com/phontuesday/status/1719547262895116485?s=20
17. Tweet from @moon3lucky (1719…085) (https://twitter.com/moon3lucky/status/1719018178142151085)
18.https://x.com/NguynLi20638425/status/1719547769659207978?s=20 no ads
(https://twitter.com/binancedomain/status/1719510220446269457)
20. Tweet from @DFredricka3304 (1719…768) (https://twitter.com/DFredricka3304/status/1719547912814776768)
21. Tweet from @trieuvuthanhtam (1719…553) (https://twitter.com/trieuvuthanhtam/status/1719535038499606553?t=2esmrUUZH95o2iEg8v4-3A&s=19)
22. Tweet from @shirley24082 (1719…331) (https://twitter.com/shirley24082/status/1719383439873573331?t=K-6IRU-wAkg9aUHoBhregQ&s=19)
23.https://x.com/xunhuy54913330/status/1719521625442537790?s=46
 (https://twitter.com/hungdo93510063/status/1719488692052427120?s=46&t=BtVV_5xcTOh5oUxoTJVjTg)
25. Tweet from @jack88eth (1719…954) (https://twitter.com/jack88eth/status/1719548179321073954?t=GzyziPo_1Iss6lIJqAaxrA&s=19)
26. Tweet from @linnheidi6868 (1719…922) (https://twitter.com/linnheidi6868/status/1719292515080339922?t=NfJwcw5IfJJHKCw1LISwjA&s=19)
27. Tweet from @Michael97613221 (1719…316) (https://twitter.com/Michael97613221/status/1719548894734856316)
28.https://x.com/ngochuyen20121/status/1719535125627830287?s=46&t=YmZNe8hd1ZtoKjdtR9lb8w
 (https://twitter.com/PhmDuyP46415142/status/1719495527077990490) no ads
30.https://x.com/quocbaott/status/1719510363258183978?s=46 (no ads)
31.https://x.com/dung421990/status/1719504843331789088?s=46
32.https://x.com/dennyi910/status/1719517503041483253?s=46
33. Tweet from @0xNTDafl (1719…936) (https://twitter.com/0xNTDafl/status/1719547502905761936)
34.https://x.com/johncoffeekoin/status/1719536291350757585?s=20
35. Tweet from @haiyencns (1719…185) (https://twitter.com/haiyencns/status/1719531425509368185?t=EWp9sWawfcRR_KJwu9Hs9Q&s=19)
36. Tweet from @TheMistTrading (1719…174) (https://twitter.com/TheMistTrading/status/1719516614478156174)
37.https://x.com/vodinhnam/status/1719529431247769645?s=20
38.https://x.com/NearAlphaLeaker/status/1719493729877377047?s=20
(https://x.com/dodochoieth/status/1719511389193355392?s=20)
40.https://x.com/pdangkhoa16/status/1719527639155929560?s=20
41.https://x.com/hientran0885/status/1719536918726369608?s=20
42.https://x.com/InterestingKite/status/1719403567256359166?s=20
43.https://x.com/traveldiaries68/status/1713848565364314276?s=46
44. Tweet from @ThuaVu6 (1719…924) (https://twitter.com/ThuaVu6/status/1719543840376606924)
45. Trùm Memecoin  (https://x.com/genji_cryptoman/status/1719548947398853001?s=61)🐉 (https://x.com/genji_cryptoman/status/1719548947398853001?s=61) trên X (https://x.com/genji_cryptoman/status/1719548947398853001?s=61)
46. NFTWisdom.eth  (https://twitter.com/nftwisdomdao/status/1719543406136107440)❤️ (https://twitter.com/nftwisdomdao/status/1719543406136107440) Memecoin trên X (https://twitter.com/nftwisdomdao/status/1719543406136107440) no ads
47. Tweet from @Crazy1BOB (1719…152) (https://twitter.com/Crazy1BOB/status/1719524976083272152)
48. 9999.BnB trên X (https://twitter.com/9090bnb/status/1719218287236816901)
49. LE HOANG TRONG trên X (https://twitter.com/Trong0322/status/1719539066537185330)
50. 딘찌 (https://x.com/jjeondinjji/status/1719495826098328033?s=46&t=RCndA8fEr0YpBUl0OFtmHw) trên X (https://x.com/jjeondinjji/status/1719495826098328033?s=46&t=RCndA8fEr0YpBUl0OFtmHw)
51. Akai  (https://x.com/AkaiTrading/status/1719544043691184176?s=20)👨‍💻 (https://x.com/AkaiTrading/status/1719544043691184176?s=20) trên X (https://x.com/AkaiTrading/status/1719544043691184176?s=20)
52. Tuấn Anh trên X (https://twitter.com/Naut35/status/1719509876190466552?t=q414Vk6_Rysu37AZfKxVig&s=19)
53. Ha Le trên X (https://x.com/halebich/status/1719544885743964637?s=46)
54. Tama Hathaway trên X (https://twitter.com/MemesKingg/status/1719542069096800748?t=ZvTYTO1-qUt2Bj35g4uXZA&s=19)
55. TPCapital trên X (https://x.com/pcapital95/status/1719550102216561046?s=46&t=--x6eDu-rVhAhJou54t_1w)
56.https://x.com/cforex999/status/1719528842988265649?s=20
57. Triệu Quang Hoàn trên X (https://twitter.com/trieuquanghoan/status/1718077577724911653?t=dO6SkSr3-LQBu8VjrEYh0Q&s=19)
58. Văn Mạnh Tài trên X (https://x.com/manhtai1906/status/1719351150686982465?s=20)
59. X-Under Crypto  (https://twitter.com/lawxunder/status/1719517339929231701)🌱💚 (https://twitter.com/lawxunder/status/1719517339929231701) trên X (https://twitter.com/lawxunder/status/1719517339929231701)
60. Alessya trên X (https://twitter.com/Kim_Tuyen00/status/1719520556608041248)
61. David Cu trên X (https://twitter.com/davidcu97/status/1719542801325760796)
62. Tweet from @trieuquanghoan (1718…653) (https://twitter.com/trieuquanghoan/status/1718077577724911653?t=dO6SkSr3-LQBu8VjrEYh0Q&s=19)
63. WORLD with DORAA trên X (https://x.com/DuyguDoraa/status/1719526501513580616?s=20)
64. Tweet from @trieuquanghoan (1715…224) (https://twitter.com/trieuquanghoan/status/1715945734829445224?t=lwobtZ-jEBvMoPwrFGN8Bg&s=19)
65. Tweet from @tavanhvanbnb (1719…915) (https://twitter.com/tavanhvanbnb/status/1719524514411974915)
66. chu hoa trên X (https://twitter.com/hoapro2000/status/1719546904881832329?t=tKFE5ow1hUunL6McYXXIvg&s=19)
67. xodt89.lens  (https://twitter.com/xodt89/status/1719523805448855740)🛸 (https://twitter.com/xodt89/status/1719523805448855740) trên X (https://twitter.com/xodt89/status/1719523805448855740)
68. Pi.SpayX trên X (https://x.com/pispayx/status/1718807990911008826?s=46)
69. CryptoNews66 trên X (https://x.com/cryptonews66/status/1719505506610647175?s=46)
70. Newly Market trên X (https://twitter.com/hoanglinh9084/status/1719518258142011902)
71. KimDori trên X (https://twitter.com/Kimdori2802/status/1719540833064763636?t=n4HqJJ2jCzLIP7CuBF7ExQ&s=19)
72. duy368.bnb trên X (https://twitter.com/Huynhcongduy3/status/1719398446086664289)
73. Bich Dao trên X (https://twitter.com/bichdao3737/status/1719535887091183869)
74. Minh Tiên trên X (https://x.com/pedros515/status/1719548570096058369?s=20)
75. Crypto MouseTy trên X (https://twitter.com/CMousety31742/status/1719551435388702841)
76. Shine  (https://twitter.com/mtpcz/status/1719539102159401259?t=01siwvuMj_Mea4GdND0Yig&s=19)💎⚡️ (https://twitter.com/mtpcz/status/1719539102159401259?t=01siwvuMj_Mea4GdND0Yig&s=19) #PIP ( (https://twitter.com/mtpcz/status/1719539102159401259?t=01siwvuMj_Mea4GdND0Yig&s=19)📦 (https://twitter.com/mtpcz/status/1719539102159401259?t=01siwvuMj_Mea4GdND0Yig&s=19), (https://twitter.com/mtpcz/status/1719539102159401259?t=01siwvuMj_Mea4GdND0Yig&s=19)💫 (https://twitter.com/mtpcz/status/1719539102159401259?t=01siwvuMj_Mea4GdND0Yig&s=19)) trên X (https://twitter.com/mtpcz/status/1719539102159401259?t=01siwvuMj_Mea4GdND0Yig&s=19)
77. Tweet from @thichjabeo (1719…912) (https://twitter.com/thichjabeo/status/1719283142471954912)
78.https://x.com/renjisats/status/1719529187655225380?s=46&t=VRzCH5VR1uRFpuJnhSLmzQ
79. Tweet from @huonggiang1609 (1719…289) (https://twitter.com/huonggiang1609/status/1719332058655572289?t=MGFI52B9_INE9iGYzfowBA&s=19)
80. baonguclub trên X (https://twitter.com/baonguclub/status/1719412367883424071)
81.https://x.com/Kudzo666/status/1719506611411300604?s=20
82.https://x.com/kalaieth/status/1719514689548554736?s=46
83.https://x.com/pyosic2/status/1719553045602906248?s=46
84. Thúy Vượng trên X (https://twitter.com/thuyvuong86/status/1719517787641741328?t=iorseOepp_9b9G-H9LaBHg&s=19)
85. Lê Công Sinh trên X (https://x.com/sinhlecong39237/status/1719496187991253021?s=46)
`;

// Regular expression to extract links
let regex = /((http|https):\/\/[^\s]+)/g;

let extractedLinksCopy = [];
let copiedLinks = "";

const executeFilter = () => {
  // Using match() to extract links
  let extractedLinks = link.match(regex);

  const index = extractedLinks.findIndex((item) => {
    return item.includes(document.querySelector("#username").value);
  });

  console.log(index);
  extractedLinks.splice(index, 1);

  // Printing the extracted links
  console.log(extractedLinks);

  const filterArr = [];

  for (let i = 0; i < extractedLinks.length - 1; i++) {
    if (extractedLinks[i].slice(0, 30) === extractedLinks[i + 1].slice(0, 30)) {
      filterArr.push({ link: extractedLinks[i], index: i });
    }
  }

  console.log("FilterArr", filterArr);

  filterArr.reverse().forEach((item) => {
    extractedLinks.splice(item.index, 1);
  });

  extractedLinksCopy = extractedLinks.map((item) => {
    let li = document.createElement("li");

    if (item.includes(")")) {
      const modifiedItem = item.substring(0, item.indexOf(")"));
      li.innerText = `${modifiedItem}`;
      document.querySelector(".links").appendChild(li);
      console.log(extractedLinks);
      return modifiedItem;
    }
  });
};

document.querySelector(".copy-default").addEventListener("click", () => {
  console.log(extractedLinksCopy);
  extractedLinksCopy.map((item) => {
    copiedLinks += item + "\n";
  });

  navigator.clipboard.writeText(copiedLinks);
  document.querySelector(".copy-default").innerText = "Copied";
});

document.querySelector("form").addEventListener("change", () => {
  document
    .querySelector(".copy-default")
    .setAttribute("style", "color:#b3b2b0; background-color:#8b8b8b;");
  document.querySelector(".copy-default").innerText = "Copy";
});
