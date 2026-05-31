---
title: "天気予報 Webアプリ"
description: "OpenWeather APIを使ったリアルタイム天気予報アプリ。現在地の天気と週間予報を美しいUIで表示します。"
pubDate: 2024-08-15
category: "Webアプリ"
tags: ["React", "TypeScript", "API", "Tailwind CSS"]
github: "https://github.com/yourusername/weather-app"
demo: "https://weather.yoursite.com"
status: "completed"
featured: true
---

# 天気予報 Webアプリ

OpenWeather API を使ったリアルタイム天気予報アプリです。

## 特徴

- **現在地の天気**: Geolocation API で自動取得
- **週間予報**: 7日間の天気と気温を表示
- **時間別予報**: 24時間の詳細な予報
- **PWA対応**: ホーム画面に追加してオフラインでも閲覧可能
- **ダークモード**: 時刻に応じて自動切替

## 技術的なポイント

```typescript
// カスタムフックで天気データを管理
function useWeather(lat: number, lon: number) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather(lat, lon)
      .then(setData)
      .finally(() => setLoading(false));
  }, [lat, lon]);

  return { data, loading };
}
```

React Query を使って APIキャッシュを管理し、無駄なリクエストを削減しています。

## 苦労した点

位置情報の権限エラーハンドリングと、APIのレート制限への対応が難しかったです。結果的に都市名検索のフォールバック機能も追加しました。
