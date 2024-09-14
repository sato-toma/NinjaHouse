# NinjaHouse

# Requirement
## Unity
  - Unity アカウントを作る
    - Unity公式サイトにて[アカウントを作成](https://unity.com/ja)し、Unity IDを取得する
  - Unity Hubを導入する
    - Unity Hubを[ダウンロード](https://unity.com/ja/download)する
    - Unity HubにサインインしてUnity IDを入力する
  - Unityを導入する
    - Cluster Creator Kitの対応バージョンを[確認](https://docs.cluster.mu/creatorkit/installation/install-unity/)する
      - 2024/09/14時点の対応バージョン: 2021.3.4
    - Unityを[ダウンロード](https://unity.com/releases/editor/archive)する
    - Unity モジュールを導入する
      - 2024/09/14時点の導入モジュール
        - 開発者ツール
          - Microsoft Visual Studio Community 2019
        - プラットフォーム
          - Android Build Support
          - iOS Build Support
          - Mac Build Support (Mono)
        - 言語パック
          - 日本語
        - ドキュメント
          - Documentation

# Environment
## Repository
- クローン時のツリー
<pre>
    .
    ├── NinjaHouse
      ├── Assets
        └── Project
          └── NinjaHouse
            ├── LICENSE.md
            └── README.md
</pre>

## ClusterCreatorKitTemplate Setup
- ClusterCreatorKitTemplate
  - ClusterCreatorKitTemplateを[ダウンロード](https://bit.ly/creator-kit-template)する
  - ClusterCreatorKitTemplateをNinjaHouseにコピペする
- <pre>
    .
    ├── NinjaHouse
      ├── Assets
        ├── ClusterCreatorKitTemplate
        ├── ClusterGAMEWORLDCENTER
        ├── ClusterVR
        └── Project
          └── NinjaHouse
            ├── LICENSE.md
            └── README.md
      ├── Packages
      ├── ProjectSettings
      ├── LICENSE.md
      └── README.md
    └── .gitignore
</pre>

# Development
## Opening the Unity Project
- Unity Hubから[プロジェクト]タブを開き、[開く]>[ディスクから加える]で`.\NinjaHouse`までのパスを指定する
- Unity Hubのプロジェクト一覧からNinjaHouseをクリックする

# Link
- [Cluster Creator Kit ドキュメント]( https://docs.cluster.mu/creatorkit/)