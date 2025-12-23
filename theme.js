// theme.js - Tailwind CSSの設定（色やフォントのカスタマイズ）
tailwind.config = {
    theme: {
        extend: {
            colors: {
                // ★ここを変えるだけで、サイト全体の「青」が別の色に変わります！
                // 例: colors.indigo, colors.rose, colors.emerald, colors.blue, colors.slate など
                primary: tailwind.colors.indigo,   // メインカラー（ボタン、ヘッダーなど）
                secondary: tailwind.colors.slate,  // 文字色、背景など
                accent: tailwind.colors.orange,    // アクセント（資格バッジなど）
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
}