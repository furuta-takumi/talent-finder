// theme.js - 掲示板（コルクボード）風テーマ
tailwind.config = {
    theme: {
        extend: {
            colors: {
                // メインカラー：画鋲の「赤」や、重要な掲示物の色
                primary: {
                    50: '#fff1f2',
                    100: '#ffe4e6',
                    200: '#fecdd3',
                    300: '#fda4af',
                    400: '#fb7185',
                    500: '#f43f5e', // 画鋲の赤
                    600: '#e11d48',
                    700: '#be123c',
                    800: '#9f1239',
                    900: '#881337',
                },
                
                // ベースカラー：コルクや木材、紙の茶色系
                secondary: {
                    50: '#fbf7f1', // 紙の白
                    100: '#f5efe6',
                    200: '#eaddc5',
                    300: '#e0ccb0',
                    400: '#d2b48c', // コルク色薄め
                    500: '#bcaaa4',
                    600: '#8d6e63', // 木枠の色
                    700: '#5d4037',
                    800: '#4e342e',
                    900: '#3e2723',
                },
                
                // アクセント：付箋（ポストイット）の黄色
                accent: tailwind.colors.yellow,
                
                // サブアクセント：黒板の緑や、青いテープの色
                success: tailwind.colors.teal,
            },
            fontFamily: {
                // 手書き風フォントを優先
                sans: ['"Yomogi"', '"Zen Maru Gothic"', 'sans-serif'],
            },
            // 影を強調して「浮いている感」を出す
            boxShadow: {
                'paper': '2px 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'floating': '5px 5px 15px rgba(0,0,0,0.15)',
            }
        }
    }
}