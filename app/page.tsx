import Image from 'next/image';

export default function Home() {
  const tierData = {
    T0: [
      { name: "迷宮", image: "/images/maze.jpeg" },
      { name: "擬似神化", image: "/images/red-eva.jpeg" },
      { name: "CoMETIK", image: "/images/cometik.jpeg" },
    ],

    T1: [
      { name: "陳&阿米婭", image: "/images/arknights.jpeg" },
      { name: "暗影", image: "/images/shadow.jpeg" },
      { name: "蕾潔", image: "/images/reze.jpeg" },
      { name: "鏈鋸人", image: "/images/csm.jpeg" },
      { name: "皇帝", image: "/images/roze.jpeg" },
    ],

    "T1.5": [
      { name: "劍心", image: "/images/kenshin.jpeg" },
      { name: "嬴政", image: "/images/red-king.jpeg" },
      { name: "犬夜叉", image: "/images/dog.jpeg" },
     { name: "WILLE", image: "/images/wille.jpeg" },
      { name: "蓋烏斯", image: "/images/purple-eva.jpeg" },
      { name: "Walkure", image: "/images/walkure.jpeg" },
      { name: "Δ小隊", image: "/images/delta-team.jpeg" },
      { name: "尤娜", image: "/images/uta.PNG" },
      { name: "艾莉絲", image: "/images/eris.jpeg" },
      { name: "洛琪希&盧迪", image: "/images/roxy.jpeg" },
       { name: "早乙女", image: "/images/aruto.PNG" },
       { name: "自爆機", image: "/images/281_deck.webp" },
      { name: "雪露&蘭卡", image: "/images/sherly-ranka.webp" },
      { name: "雪露", image: "/images/sherly.PNG" },
      { name: "汗明", image: "/images/ganmen.PNG" },
      { name: "灰姑娘", image: "/images/cinderella.PNG" },
       { name: "坂本&平助", image: "/images/sakamoto.jpeg" },
      { name: "黃EVA", image: "/images/yellow-eva.PNG" },
    ],

     "T2": [
      { name: "米西利斯",image: "/images/IMG_8768.PNG" },
      { name: "魔法大學", image: "/images/395_deck.webp" },
      { name: "W", image: "/images/IMG_8748.PNG" },
     { name: "GGO", image: "/images/IMG_8800.PNG" },
      { name: "致命兔", image: "/images/IMG_8789.PNG" },
      { name: "無窮之鎖", image: "/images/IMG_8752.PNG" },
      { name: "一年級", image: "/images/IMG_8749.PNG" },
      { name: "三年級", image: "/images/IMG_8750.PNG" },
      { name: "小圓", image: "/images/240_deck.webp" },
      { name: "克萊兒", image: "/images/382_deck.webp" },
       { name: "蘿絲&阿萊克西亞", image: "/images/383_deck.webp" },
      { name: "羅賽", image: "/images/277_deck.webp" },
      { name: "蘭卡", image: "/images/IMG_8821.PNG" },
      { name: "金色之闇", image: "/images/IMG_8778.PNG" },
      { name: "ofa", image: "/images/185_deck.webp" },
       { name: "坂本商店", image: "/images/sakamotoshop.jpeg" },
        { name: "大佛&神神廻", image: "/images/IMG_8782.PNG" },
         { name: "月山習", image: "/images/IMG_8755.PNG" },
         { name: "七陰", image: "/images/381_deck.webp" },
         { name: "齋藤一", image: "/images/IMG_8761.PNG" },
           { name: "瑪奇瑪", image: "/images/381_deck.webp" },
       { name: "忍野忍", image: "/images/IMG_8816.PNG" },
          { name: "碧翠絲", image: "/images/IMG_8819.PNG" },
          { name: "補習組", image: "/images/IMG_8766.PNG" },
            { name: "學生會", image: "/images/IMG_8834.PNG" },
             { name: "蕾姆&昂", image: "/images/IMG_8762.PNG" },
              { name: "藍rider", image: "/images/340_5deck.webp" },
               { name: "飛信隊", image: "/images/IMG_1425.PNG" },
               { name: "清夏&莉莉婭", image: "/images/207_deck.webp" },
               { name: "米利安", image: "/images/283_deck.webp" },
               { name: "早川秋&姬野", image: "/images/385_deck.webp" },
               { name: "彌勒", image: "/images/389_deck.webp" },
                 { name: "信號機", image: "/images/IMG_8423.PNG" },
                   { name: "千礦&伯理", image: "/images/IMG_8744.PNG" },
                    { name: "CCG", image: "/images/IMG_8756.PNG" },
                      { name: "Fire Bomber", image: "/images/IMG_8786.PNG" },
     { name: "進擊的巨人", image: "/images/IMG_8796.PNG" },

    ], 
  };

  return (
    <main className="min-h-screen bg-gray-950 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-2">
          HongKong Union Arena Tier List
        </h1>
        <p className="text-center text-gray-400 mb-12">[Updated: 03/07/2026]</p>

        {Object.entries(tierData).map(([tier, decks]) => (
          <div key={tier} className="mb-12">
            {/* Tier Header */}
            <div className="border border-red-500 rounded-lg p-4 mb-4 bg-gray-900">
              <h2 className="text-2xl font-bold text-white text-center">
                {tier}
              </h2>
            </div>

            {/* Deck Grid */}
            <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-3">
              {decks.map((deck, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="p-2">
                    <Image
                      src={deck.image}
                      alt={deck.name}
                      width={180}
                      height={180}
                      className="w-full aspect-square object-contain"
                    />
                  </div>

                  {/* Name */}
                  <div className="text-center py-2 text-sm font-medium text-gray-200 border-t border-gray-700">
                    {deck.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
