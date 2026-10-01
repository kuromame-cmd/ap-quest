// =====================================
// AP QUEST Ver.0.6
// =====================================


// =====================================
// 1. QUESTION DATABASE
// =====================================

const questionData = {

  // ===================================
  // NETWORK
  // ===================================

  network: {

    name:
      "ネットワーク海域",

    icon:
      "🌊",

    stages: {

      // -------------------------------
      // STAGE 1
      // -------------------------------

      stage1: {

        name:
          "ネットワーク基礎",

        questions: [

          {
            id: "n1",

            name:
              "ARPゴースト",

            question:
              "IPアドレスからMACアドレスを調べるプロトコルは？",

            answers: [
              "DNS",
              "ARP",
              "HTTP",
              "SMTP"
            ],

            correct: 1,

            explanation:
              "ARPは、IPアドレスに対応するMACアドレスを調べるために使われます。"
          },


          {
            id: "n2",

            name:
              "DNSスライム",

            question:
              "ドメイン名からIPアドレスを調べる仕組みは？",

            answers: [
              "DNS",
              "FTP",
              "ARP",
              "NTP"
            ],

            correct: 0,

            explanation:
              "DNSは、ドメイン名とIPアドレスを対応付ける仕組みです。"
          },


          {
            id: "n3",

            name:
              "LANバット",

            question:
              "比較的狭い範囲で構築されるネットワークを何という？",

            answers: [
              "WAN",
              "LAN",
              "VPN",
              "MAN"
            ],

            correct: 1,

            explanation:
              "LANは、建物や事業所など比較的狭い範囲で構築されるネットワークです。"
          },


          {
            id: "n4",

            name:
              "ルータゴーレム",

            question:
              "異なるネットワーク間でパケットを中継する機器は？",

            answers: [
              "ルータ",
              "リピータ",
              "ハブ",
              "モデム"
            ],

            correct: 0,

            explanation:
              "ルータは、IPアドレスなどを基に異なるネットワーク間でパケットを中継します。"
          },


          {
            id: "n5",

            name:
              "IPウィスプ",

            question:
              "IPv4のIPアドレスは何ビット？",

            answers: [
              "16ビット",
              "32ビット",
              "64ビット",
              "128ビット"
            ],

            correct: 1,

            explanation:
              "IPv4のIPアドレスは32ビットです。"
          },

          {
  id: "n16",
  monster: "OSIスライム",
  question: "OSI基本参照モデルで、IPアドレスを使って経路選択を行う層はどれ？",
  answers: [
    "データリンク層",
    "ネットワーク層",
    "トランスポート層",
    "セッション層"
  ],
  correct: 1,
  explanation:
    "IPアドレスを使ったルーティングは、OSI基本参照モデルのネットワーク層の役割です。"
},
{
  id: "n17",
  monster: "MACゴースト",
  question: "LAN内で機器を識別するために使用される物理アドレスはどれ？",
  answers: [
    "IPアドレス",
    "MACアドレス",
    "ポート番号",
    "URL"
  ],
  correct: 1,
  explanation:
    "MACアドレスは、ネットワークインタフェースを識別するためのアドレスです。"
},
{
  id: "n18",
  monster: "スイッチナイト",
  question: "MACアドレスを利用して、LAN内でフレームを転送する機器はどれ？",
  answers: [
    "ルータ",
    "L2スイッチ",
    "DNSサーバ",
    "プロキシサーバ"
  ],
  correct: 1,
  explanation:
    "L2スイッチはMACアドレスを参照して、適切なポートへフレームを転送します。"
},
{
  id: "n19",
  monster: "サブネットゴーレム",
  question: "IPv4で、サブネットマスク255.255.255.0と同じプレフィックス表記はどれ？",
  answers: [
    "/8",
    "/16",
    "/24",
    "/32"
  ],
  correct: 2,
  explanation:
    "255.255.255.0では先頭24ビットが1なので、プレフィックス表記では/24です。"
},
{
  id: "n20",
  monster: "ブロードキャストドラゴン",
  question: "同一ネットワーク内のすべての端末にデータを送信する方式はどれ？",
  answers: [
    "ユニキャスト",
    "ブロードキャスト",
    "ルーティング",
    "トンネリング"
  ],
  correct: 1,
  explanation:
    "ブロードキャストは、同一ブロードキャストドメイン内のすべての端末を対象に送信する方式です。"
}


          
        ]

      },


      // -------------------------------
      // STAGE 2
      // -------------------------------

      stage2: {

        name:
          "TCP/IPの洞窟",

        questions: [

          {
            id: "n6",

            name:
              "SYNゴースト",

            question:
              "TCPの3ウェイハンドシェイクで最初に送信されるものは？",

            answers: [
              "SYN",
              "ACK",
              "FIN",
              "RST"
            ],

            correct: 0,

            explanation:
              "TCPでは、最初にSYNを送信して接続を要求します。"
          },


          {
            id: "n7",

            name:
              "UDPスライム",

            question:
              "コネクションレス型のトランスポート層プロトコルは？",

            answers: [
              "TCP",
              "UDP",
              "HTTP",
              "IP"
            ],

            correct: 1,

            explanation:
              "UDPはコネクションレス型のプロトコルです。"
          },


          {
            id: "n8",

            name:
              "HTTPSナイト",

            question:
              "HTTPSで標準的に使用されるポート番号は？",

            answers: [
              "21",
              "25",
              "80",
              "443"
            ],

            correct: 3,

            explanation:
              "HTTPSでは標準的にTCPポート443を使用します。"
          },


          {
            id: "n9",

            name:
              "SMTPメイジ",

            question:
              "電子メールの送信・転送に使われるプロトコルは？",

            answers: [
              "POP3",
              "SMTP",
              "IMAP",
              "SNMP"
            ],

            correct: 1,

            explanation:
              "SMTPは電子メールの送信やメールサーバ間の転送に使われます。"
          },


          {
            id: "n10",

            name:
              "TCPナイト",

            question:
              "TCPの特徴として適切なものは？",

            answers: [
              "到達確認を行わない",
              "順序制御や再送制御を行う",
              "必ずブロードキャストする",
              "IPアドレスを自動配布する"
            ],

            correct: 1,

            explanation:
              "TCPは順序制御や再送制御などを行い、通信の信頼性を確保します。"
          },

          {
  id: "n21",
  monster: "TCPポートスライム",
  question: "WebサーバへのHTTP通信で標準的に使用されるポート番号はどれ？",
  answers: [
    "21",
    "25",
    "80",
    "443"
  ],
  correct: 2,
  explanation:
    "HTTPの標準ポート番号は80です。HTTPSでは443が使用されます。"
},
{
  id: "n22",
  monster: "FTPゴースト",
  question: "ネットワーク上でファイルを転送するためのプロトコルはどれ？",
  answers: [
    "FTP",
    "SMTP",
    "DNS",
    "SNMP"
  ],
  correct: 0,
  explanation:
    "FTPは、ネットワーク上でファイルを転送するためのプロトコルです。"
},
{
  id: "n23",
  monster: "POPナイト",
  question: "メールサーバから電子メールを受信するために使われるプロトコルはどれ？",
  answers: [
    "ARP",
    "POP3",
    "SMTP",
    "NTP"
  ],
  correct: 1,
  explanation:
    "POP3はメールサーバから電子メールを受信するためのプロトコルです。"
},
{
  id: "n24",
  monster: "ICMPウィスプ",
  question: "pingコマンドで、通信相手への到達確認などに利用されるプロトコルはどれ？",
  answers: [
    "ICMP",
    "FTP",
    "SMTP",
    "DHCP"
  ],
  correct: 0,
  explanation:
    "pingではICMPのエコー要求とエコー応答を利用して、相手への到達性を確認します。"
},
{
  id: "n25",
  monster: "NTPメイジ",
  question: "ネットワーク上の機器の時刻を同期するためのプロトコルはどれ？",
  answers: [
    "SNMP",
    "NTP",
    "POP3",
    "ARP"
  ],
  correct: 1,
  explanation:
    "NTPは、ネットワークに接続された機器の時刻を同期するためのプロトコルです。"
}
          

        ]

      },


      // -------------------------------
      // STAGE 3
      // -------------------------------

      stage3: {

        name:
          "ネットワーク構成の塔",

        questions: [

          {
            id: "n11",

            name:
              "NATゴーレム",

            question:
              "プライベートIPアドレスとグローバルIPアドレスを変換する技術は？",

            answers: [
              "DNS",
              "NAT",
              "ARP",
              "DHCP"
            ],

            correct: 1,

            explanation:
              "NATはIPアドレスを変換する技術です。"
          },


          {
            id: "n12",

            name:
              "VLANファントム",

            question:
              "物理的な接続構成とは独立してLANを論理的に分割する技術は？",

            answers: [
              "VLAN",
              "VPN",
              "NAT",
              "DNS"
            ],

            correct: 0,

            explanation:
              "VLANを使うとLANを論理的に分割できます。"
          },


          {
            id: "n13",

            name:
              "DHCPスライム",

            question:
              "端末へIPアドレスなどの設定情報を自動的に割り当てるプロトコルは？",

            answers: [
              "ARP",
              "SMTP",
              "DHCP",
              "FTP"
            ],

            correct: 2,

            explanation:
              "DHCPはIPアドレスなどの設定情報を端末へ自動的に割り当てます。"
          },


          {
            id: "n14",

            name:
              "CIDRドラゴン",

            question:
              "192.168.1.0/24 のネットワーク部は何ビット？",

            answers: [
              "8ビット",
              "16ビット",
              "24ビット",
              "32ビット"
            ],

            correct: 2,

            explanation:
              "/24は、先頭24ビットがネットワーク部であることを示します。"
          },


          {
            id: "n15",

            name:
              "Gatewayナイト",

            question:
              "端末が異なるネットワークへ通信するときの出口として利用するものは？",

            answers: [
              "デフォルトゲートウェイ",
              "DNSキャッシュ",
              "MACテーブル",
              "ループバック"
            ],

            correct: 0,

            explanation:
              "異なるネットワークへの通信では、通常デフォルトゲートウェイへパケットを送ります。"
          },

          {
  id: "n26",
  monster: "プロキシファントム",
  question: "クライアントの代わりにWebサーバへアクセスする仕組みはどれ？",
  answers: [
    "プロキシサーバ",
    "DNSサーバ",
    "DHCPサーバ",
    "NTPサーバ"
  ],
  correct: 0,
  explanation:
    "プロキシサーバは、クライアントの代理として外部のWebサーバなどへアクセスします。"
},
{
  id: "n27",
  monster: "VPNナイト",
  question: "インターネットなどの公衆網上に、仮想的な専用ネットワークを構築する技術はどれ？",
  answers: [
    "VLAN",
    "VPN",
    "NAT",
    "ARP"
  ],
  correct: 1,
  explanation:
    "VPNは、公衆網上に暗号化などを利用して仮想的な専用ネットワークを構築する技術です。"
},
{
  id: "n28",
  monster: "ロードバランサーゴーレム",
  question: "複数のサーバに処理要求を振り分け、負荷を分散する装置はどれ？",
  answers: [
    "ルータ",
    "ロードバランサ",
    "リピータ",
    "DNSリゾルバ"
  ],
  correct: 1,
  explanation:
    "ロードバランサは、複数のサーバへ処理要求を振り分けて負荷を分散します。"
},
{
  id: "n29",
  monster: "SNMPメイジ",
  question: "ルータやスイッチなどのネットワーク機器を監視・管理するためのプロトコルはどれ？",
  answers: [
    "SMTP",
    "SNMP",
    "HTTP",
    "POP3"
  ],
  correct: 1,
  explanation:
    "SNMPは、ネットワーク機器の状態監視や管理に利用されるプロトコルです。"
},
{
  id: "n30",
  monster: "QoSドラゴン",
  question: "音声通信など特定の通信を優先し、通信品質を確保する技術はどれ？",
  answers: [
    "QoS",
    "NAT",
    "ARP",
    "DHCP"
  ],
  correct: 0,
  explanation:
    "QoSは通信の種類に応じて優先制御などを行い、必要な通信品質を確保する技術です。"
}

        ]

      }

    },


    boss: {

      name:
        "ネットワークの魔竜",

      questionCount:
        10

    }

  },


  // ===================================
  // FUTURE AREAS
  // ===================================

  security: {

  name:
    "セキュリティ城塞",

  icon:
    "🔐",

  stages: {

    // ===============================
    // STAGE 1
    // セキュリティ基礎
    // ===============================

    stage1: {

      name:
        "セキュリティ基礎",

      questions: [

        {
          id: "s1",

          name:
            "CIAゴースト",

          question:
            "情報セキュリティの3要素に含まれないものは？",

          answers: [
            "機密性",
            "完全性",
            "可用性",
            "拡張性"
          ],

          correct: 3,

          explanation:
            "情報セキュリティの基本3要素は、機密性・完全性・可用性です。"
        },

        {
          id: "s2",

          name:
            "ファイアウォールゴーレム",

          question:
            "ネットワークを流れる通信をルールに基づいて許可・遮断する仕組みは？",

          answers: [
            "ファイアウォール",
            "DNS",
            "DHCP",
            "RAID"
          ],

          correct: 0,

          explanation:
            "ファイアウォールは通信を監視し、設定されたルールに基づいて許可・遮断します。"
        },

        {
          id: "s3",

          name:
            "マルウェアスライム",

          question:
            "コンピュータに被害を与える悪意あるソフトウェアの総称は？",

          answers: [
            "ミドルウェア",
            "マルウェア",
            "ファームウェア",
            "グループウェア"
          ],

          correct: 1,

          explanation:
            "ウイルスやランサムウェアなど、悪意あるソフトウェアを総称してマルウェアと呼びます。"
        },

        {
          id: "s4",

          name:
            "バックアップナイト",

          question:
            "ランサムウェア被害への備えとして有効な対策は？",

          answers: [
            "バックアップを取得する",
            "パスワードを共有する",
            "OS更新を停止する",
            "全ポートを開放する"
          ],

          correct: 0,

          explanation:
            "重要データのバックアップは、ランサムウェアなどによるデータ損失への重要な対策です。"
        },

        {
          id: "s5",

          name:
            "パッチウィスプ",

          question:
            "ソフトウェアの脆弱性を修正するために提供されるプログラムは？",

          answers: [
            "パッチ",
            "Cookie",
            "キャッシュ",
            "スクリプト"
          ],

          correct: 0,

          explanation:
            "脆弱性や不具合を修正するための更新プログラムをパッチと呼びます。"
        },

        {
  id: "s16",
  monster: "パスワードゴーレム",
  question: "パスワードを総当たりで試して解読を試みる攻撃はどれ？",
  answers: [
    "ブルートフォース攻撃",
    "SQLインジェクション",
    "DoS攻撃",
    "DNSキャッシュポイズニング"
  ],
  correct: 0,
  explanation:
    "ブルートフォース攻撃は、考えられるパスワードを総当たりで試す攻撃です。"
},
{
  id: "s17",
  monster: "ソーシャルゴースト",
  question: "人間の心理的な隙を利用して、パスワードなどの情報を入手する手法はどれ？",
  answers: [
    "ソーシャルエンジニアリング",
    "ハッシュ化",
    "サンドボックス",
    "負荷分散"
  ],
  correct: 0,
  explanation:
    "ソーシャルエンジニアリングは、人間の心理や行動上の隙を利用して機密情報を入手する手法です。"
},
{
  id: "s18",
  monster: "フィッシングスライム",
  question: "偽のWebサイトなどへ利用者を誘導し、認証情報を盗む攻撃はどれ？",
  answers: [
    "フィッシング",
    "スニッフィング",
    "DoS",
    "ディレクトリトラバーサル"
  ],
  correct: 0,
  explanation:
    "フィッシングは、偽サイトや偽メールなどを利用して認証情報などを盗む手法です。"
},
{
  id: "s19",
  monster: "脆弱性ナイト",
  question: "まだ修正プログラムが提供されていない脆弱性を狙う攻撃はどれ？",
  answers: [
    "ゼロデイ攻撃",
    "辞書攻撃",
    "リプレイ攻撃",
    "DoS攻撃"
  ],
  correct: 0,
  explanation:
    "ゼロデイ攻撃は、修正プログラムが提供される前の脆弱性を悪用する攻撃です。"
},
{
  id: "s20",
  monster: "セキュリティポリシーメイジ",
  question: "組織の情報セキュリティに関する基本的な方針を定めたものはどれ？",
  answers: [
    "情報セキュリティポリシー",
    "SLA",
    "WBS",
    "RFP"
  ],
  correct: 0,
  explanation:
    "情報セキュリティポリシーは、組織が情報資産をどのように守るかを定めた基本方針です。"
}

      ]

    },


    // ===============================
    // STAGE 2
    // 暗号と認証
    // ===============================

    stage2: {

      name:
        "暗号と認証の神殿",

      questions: [

        {
          id: "s6",

          name:
            "共通鍵ゴーレム",

          question:
            "共通鍵暗号方式の特徴として正しいものは？",

          answers: [
            "暗号化と復号で同じ鍵を使う",
            "公開鍵だけで復号する",
            "鍵を一切使用しない",
            "必ずハッシュ関数を使う"
          ],

          correct: 0,

          explanation:
            "共通鍵暗号方式では、暗号化と復号に同じ秘密鍵を使用します。"
        },

        {
          id: "s7",

          name:
            "公開鍵メイジ",

          question:
            "公開鍵暗号方式で、受信者だけが復号できるように暗号化するときに使用する鍵は？",

          answers: [
            "送信者の秘密鍵",
            "送信者の公開鍵",
            "受信者の公開鍵",
            "受信者の秘密鍵"
          ],

          correct: 2,

          explanation:
            "機密性を確保する場合、受信者の公開鍵で暗号化し、受信者の秘密鍵で復号します。"
        },

        {
          id: "s8",

          name:
            "ハッシュスライム",

          question:
            "ハッシュ関数の特徴として適切なものは？",

          answers: [
            "元データを容易に復元できる",
            "同じ入力から同じハッシュ値が得られる",
            "必ず暗号鍵が必要",
            "通信速度を上げる"
          ],

          correct: 1,

          explanation:
            "ハッシュ関数では、同じ入力データからは原則として同じハッシュ値が生成されます。"
        },

        {
          id: "s9",

          name:
            "署名ナイト",

          question:
            "デジタル署名を作成するとき、署名者が使用する鍵は？",

          answers: [
            "署名者の秘密鍵",
            "署名者の公開鍵",
            "受信者の秘密鍵",
            "受信者の公開鍵"
          ],

          correct: 0,

          explanation:
            "デジタル署名は署名者の秘密鍵を使って作成し、署名者の公開鍵を使って検証します。"
        },

        {
          id: "s10",

          name:
            "MFAファントム",

          question:
            "多要素認証の例として適切なものは？",

          answers: [
            "パスワード＋秘密の質問",
            "パスワード＋指紋認証",
            "パスワードを2回入力",
            "2種類のパスワード"
          ],

          correct: 1,

          explanation:
            "パスワードは知識要素、指紋は生体要素なので、異なる要素を組み合わせた多要素認証になります。"
        },

        {
  id: "s21",
  monster: "AESナイト",
  question: "AESはどの種類の暗号方式？",
  answers: [
    "共通鍵暗号方式",
    "公開鍵暗号方式",
    "ハッシュ関数",
    "電子署名方式"
  ],
  correct: 0,
  explanation:
    "AESは、暗号化と復号に同じ鍵を使用する共通鍵暗号方式です。"
},
{
  id: "s22",
  monster: "RSAゴーレム",
  question: "RSAが代表例として知られる暗号方式はどれ？",
  answers: [
    "共通鍵暗号方式",
    "公開鍵暗号方式",
    "ハッシュ方式",
    "ワンタイムパスワード方式"
  ],
  correct: 1,
  explanation:
    "RSAは、公開鍵と秘密鍵のペアを利用する代表的な公開鍵暗号方式です。"
},
{
  id: "s23",
  monster: "証明書メイジ",
  question: "公開鍵が本人のものであることを第三者機関が証明する仕組みで使われるものはどれ？",
  answers: [
    "デジタル証明書",
    "Cookie",
    "セッションID",
    "MACアドレス"
  ],
  correct: 0,
  explanation:
    "デジタル証明書は、認証局などが公開鍵と所有者の対応関係を証明するために使用します。"
},
{
  id: "s24",
  monster: "PKIドラゴン",
  question: "公開鍵暗号技術を利用して、認証や電子署名などを実現する基盤はどれ？",
  answers: [
    "PKI",
    "VPN",
    "IDS",
    "DMZ"
  ],
  correct: 0,
  explanation:
    "PKIは公開鍵基盤のことで、公開鍵暗号やデジタル証明書を利用して認証などを実現します。"
},
{
  id: "s25",
  monster: "ソルトファントム",
  question: "パスワードのハッシュ化で、同じパスワードから同じハッシュ値になることを防ぐために付加する値はどれ？",
  answers: [
    "ソルト",
    "Cookie",
    "トークン",
    "Nonce"
  ],
  correct: 0,
  explanation:
    "ソルトはパスワードにランダムな値を加えてからハッシュ化することで、解析を困難にします。"
}

      ]

    },


    // ===============================
    // STAGE 3
    // 攻撃と防御
    // ===============================

    stage3: {

      name:
        "サイバー攻撃の塔",

      questions: [

        {
          id: "s11",

          name:
            "SQLインジェクション",

          question:
            "Webアプリケーションの入力欄などから不正なSQL文を実行させる攻撃は？",

          answers: [
            "CSRF",
            "SQLインジェクション",
            "DoS",
            "フィッシング"
          ],

          correct: 1,

          explanation:
            "SQLインジェクションは、不正なSQLを入力してデータベースを不正操作する攻撃です。"
        },

        {
          id: "s12",

          name:
            "XSSゴースト",

          question:
            "Webページに悪意あるスクリプトを埋め込み、利用者のブラウザで実行させる攻撃は？",

          answers: [
            "XSS",
            "ARP",
            "DNS",
            "NAT"
          ],

          correct: 0,

          explanation:
            "XSSはクロスサイトスクリプティングの略で、Webページ上で不正なスクリプトを実行させる攻撃です。"
        },

        {
          id: "s13",

          name:
            "CSRFファントム",

          question:
            "ログイン済み利用者の権限を悪用して、意図しない操作を実行させる攻撃は？",

          answers: [
            "CSRF",
            "ブルートフォース",
            "ポートスキャン",
            "SQLインジェクション"
          ],

          correct: 0,

          explanation:
            "CSRFは、認証済み利用者に意図しないリクエストを送信させる攻撃です。"
        },

        {
          id: "s14",

          name:
            "DoSドラゴン",

          question:
            "大量の通信などによってサービスを利用不能にする攻撃は？",

          answers: [
            "DoS攻撃",
            "辞書攻撃",
            "中間者攻撃",
            "SQLインジェクション"
          ],

          correct: 0,

          explanation:
            "DoS攻撃は、大量の通信や処理要求などによってサービス提供を妨害します。"
        },

        {
          id: "s15",

          name:
            "IDSナイト",

          question:
            "ネットワークなどを監視し、不正な通信を検知するシステムは？",

          answers: [
            "IDS",
            "DNS",
            "DHCP",
            "RAID"
          ],

          correct: 0,

          explanation:
            "IDSはIntrusion Detection Systemの略で、不正侵入や不審な通信を検知します。"
        },

        {
  id: "s26",
  monster: "ディレクトリゴースト",
  question: "URLなどに「../」を指定して、本来アクセスできないファイルへアクセスする攻撃はどれ？",
  answers: [
    "ディレクトリトラバーサル",
    "SQLインジェクション",
    "CSRF",
    "DoS攻撃"
  ],
  correct: 0,
  explanation:
    "ディレクトリトラバーサルは、../などを利用して本来公開されていないファイルへ不正にアクセスする攻撃です。"
},
{
  id: "s27",
  monster: "セッションファントム",
  question: "他人のセッションIDを不正に取得して、その利用者になりすます攻撃はどれ？",
  answers: [
    "セッションハイジャック",
    "ブルートフォース攻撃",
    "フィッシング",
    "ゼロデイ攻撃"
  ],
  correct: 0,
  explanation:
    "セッションハイジャックは、セッションIDを盗むなどして正規利用者になりすます攻撃です。"
},
{
  id: "s28",
  monster: "WAFナイト",
  question: "Webアプリケーションへの攻撃を検知・防御するための仕組みはどれ？",
  answers: [
    "WAF",
    "DHCP",
    "NTP",
    "DNS"
  ],
  correct: 0,
  explanation:
    "WAFはWeb Application Firewallの略で、Webアプリケーションへの攻撃を検知・防御します。"
},
{
  id: "s29",
  monster: "IPSゴーレム",
  question: "不正な通信を検知するだけでなく、自動的に遮断する機能を持つものはどれ？",
  answers: [
    "IDS",
    "IPS",
    "DNS",
    "SMTP"
  ],
  correct: 1,
  explanation:
    "IPSは不正な通信を検知し、必要に応じて通信を遮断します。IDSは主に検知・通知を行います。"
},
{
  id: "s30",
  monster: "DMZドラゴン",
  question: "外部ネットワークと内部ネットワークの間に設け、公開サーバなどを配置する領域はどれ？",
  answers: [
    "DMZ",
    "LAN",
    "VLAN",
    "SAN"
  ],
  correct: 0,
  explanation:
    "DMZは外部と内部ネットワークの中間に設ける領域で、Webサーバなど外部公開するサーバを配置します。"
}

      ]

    }

  },


  boss: {

    name:
      "セキュリティの魔王",

    questionCount:
      10

  }

},


  database: {

  name: "データベース地下迷宮",
  icon: "🗄️",

  stages: {

    // ===============================
    // STAGE 1：DB基礎
    // ===============================

    stage1: {

      name: "データベース基礎",

      questions: [

        {
          id: "d1",
          name: "主キースライム",
          question:
            "関係データベースで、各行を一意に識別するためのキーは？",
          answers: [
            "主キー",
            "外部キー",
            "候補キー",
            "複合インデックス"
          ],
          correct: 0,
          explanation:
            "主キーは、表の各行を一意に識別するためのキーです。"
        },

        {
          id: "d2",
          name: "外部キーゴースト",
          question:
            "他の表の主キーなどを参照し、表同士を関連付けるキーは？",
          answers: [
            "主キー",
            "外部キー",
            "スーパーキー",
            "検索キー"
          ],
          correct: 1,
          explanation:
            "外部キーは、別の表のキーを参照して表同士の関係を表します。"
        },

        {
          id: "d3",
          name: "NULLファントム",
          question:
            "SQLにおけるNULLが表すものとして適切なのは？",
          answers: [
            "数値の0",
            "空文字",
            "値が存在しない・不明",
            "FALSE"
          ],
          correct: 2,
          explanation:
            "NULLは、値が存在しない場合や値が不明であることを表します。"
        },

        {
          id: "d4",
          name: "SELECTメイジ",
          question:
            "SQLで表からデータを検索するときに使用する命令は？",
          answers: [
            "INSERT",
            "UPDATE",
            "SELECT",
            "DELETE"
          ],
          correct: 2,
          explanation:
            "SELECT文は、データベースからデータを検索・取得するときに使用します。"
        },

        {
          id: "d5",
          name: "WHEREナイト",
          question:
            "SQLのSELECT文で、取得する行の条件を指定する句は？",
          answers: [
            "ORDER BY",
            "WHERE",
            "GROUP BY",
            "FROM"
          ],
          correct: 1,
          explanation:
            "WHERE句を使うと、条件を満たす行だけを取得できます。"
        },

        {
  id: "d16",
  monster: "テーブルスライム",
  question: "関係データベースにおいて、表の横方向の1行を表す用語はどれ？",
  answers: [
    "属性",
    "タプル",
    "ドメイン",
    "ビュー"
  ],
  correct: 1,
  explanation:
    "関係データベースでは、表の1行をタプル（行・レコード）と呼びます。"
},
{
  id: "d17",
  monster: "属性ゴースト",
  question: "関係データベースにおいて、表の列に相当するものはどれ？",
  answers: [
    "属性",
    "タプル",
    "インデックス",
    "トランザクション"
  ],
  correct: 0,
  explanation:
    "関係データベースでは、表の列を属性と呼びます。"
},
{
  id: "d18",
  monster: "UNIQUEナイト",
  question: "列の値が重複しないように制約するSQLの制約はどれ？",
  answers: [
    "NOT NULL",
    "UNIQUE",
    "DEFAULT",
    "CHECKPOINT"
  ],
  correct: 1,
  explanation:
    "UNIQUE制約は、対象となる列などの値の重複を防ぐための制約です。"
},
{
  id: "d19",
  monster: "INSERTメイジ",
  question: "SQLで、表に新しい行を追加するときに使用する命令はどれ？",
  answers: [
    "SELECT",
    "UPDATE",
    "INSERT",
    "DELETE"
  ],
  correct: 2,
  explanation:
    "INSERT文は、表に新しい行を追加するときに使用します。"
},
{
  id: "d20",
  monster: "DELETEゴーレム",
  question: "SQLで、条件に一致する行を表から削除するときに使用する命令はどれ？",
  answers: [
    "DELETE",
    "DROP",
    "SELECT",
    "CREATE"
  ],
  correct: 0,
  explanation:
    "DELETE文は、指定した条件に一致する行を表から削除するときに使用します。"
}

      ]

    },


    // ===============================
    // STAGE 2：SQL・正規化
    // ===============================

    stage2: {

      name: "SQLと正規化の回廊",

      questions: [

        {
          id: "d6",
          name: "JOINゴーレム",
          question:
            "複数の表を関連する列を使って結合するSQLの操作は？",
          answers: [
            "JOIN",
            "DROP",
            "COMMIT",
            "GRANT"
          ],
          correct: 0,
          explanation:
            "JOINを使用すると、関連する列を基に複数の表を結合できます。"
        },

        {
          id: "d7",
          name: "GROUP BYスライム",
          question:
            "SQLで同じ値をもつ行をグループ化するときに使用する句は？",
          answers: [
            "WHERE",
            "GROUP BY",
            "ORDER BY",
            "HAVING ONLY"
          ],
          correct: 1,
          explanation:
            "GROUP BY句は、指定した列の値ごとに行をグループ化します。"
        },

        {
          id: "d8",
          name: "第一正規化ゴースト",
          question:
            "第1正規形で解消するものとして最も適切なのは？",
          answers: [
            "繰返し項目",
            "部分関数従属",
            "推移的関数従属",
            "デッドロック"
          ],
          correct: 0,
          explanation:
            "第1正規形では、繰返し項目をなくし、各属性を単一の値として扱います。"
        },

        {
          id: "d9",
          name: "第二正規化ナイト",
          question:
            "第2正規形で解消するものは？",
          answers: [
            "繰返し項目",
            "部分関数従属",
            "推移的関数従属",
            "排他制御"
          ],
          correct: 1,
          explanation:
            "第2正規形では、主キーの一部だけに依存する部分関数従属を排除します。"
        },

        {
          id: "d10",
          name: "第三正規化メイジ",
          question:
            "第3正規形で解消するものは？",
          answers: [
            "繰返し項目",
            "部分関数従属",
            "推移的関数従属",
            "参照制約"
          ],
          correct: 2,
          explanation:
            "第3正規形では、非キー属性間の推移的関数従属を排除します。"
        },

        {
  id: "d21",
  monster: "集約関数スライム",
  question: "SQLで、行数を数えるために使用する集約関数はどれ？",
  answers: [
    "SUM",
    "COUNT",
    "AVG",
    "MAX"
  ],
  correct: 1,
  explanation:
    "COUNTは、条件に一致する行数などを数えるための集約関数です。"
},
{
  id: "d22",
  monster: "HAVINGゴースト",
  question: "SQLで、GROUP BYによってグループ化した結果に条件を指定する句はどれ？",
  answers: [
    "WHERE",
    "HAVING",
    "ORDER BY",
    "FROM"
  ],
  correct: 1,
  explanation:
    "HAVING句は、GROUP BYでグループ化した結果に対して条件を指定します。"
},
{
  id: "d23",
  monster: "ORDERナイト",
  question: "SQLの検索結果を指定した列の値で並べ替えるために使用する句はどれ？",
  answers: [
    "ORDER BY",
    "GROUP BY",
    "HAVING",
    "JOIN"
  ],
  correct: 0,
  explanation:
    "ORDER BY句を使用すると、検索結果を指定した列を基準に並べ替えられます。"
},
{
  id: "d24",
  monster: "ビュー・メイジ",
  question: "一つ以上の表から必要なデータだけを取り出して、仮想的な表として扱うものはどれ？",
  answers: [
    "インデックス",
    "ビュー",
    "トランザクション",
    "主キー"
  ],
  correct: 1,
  explanation:
    "ビューは、SELECT文などによる検索結果を仮想的な表として扱う仕組みです。"
},
{
  id: "d25",
  monster: "関数従属ドラゴン",
  question: "ある属性の値が決まると、別の属性の値が一意に決まる関係を何という？",
  answers: [
    "参照制約",
    "関数従属",
    "排他制御",
    "射影"
  ],
  correct: 1,
  explanation:
    "属性Aの値によって属性Bの値が一意に決まる関係を、関数従属といいます。"
}

      ]

    },


    // ===============================
    // STAGE 3：トランザクション
    // ===============================

    stage3: {

      name: "トランザクション深層部",

      questions: [

        {
          id: "d11",
          name: "ACIDドラゴン",
          question:
            "トランザクションのACID特性に含まれないものは？",
          answers: [
            "原子性",
            "一貫性",
            "独立性",
            "拡張性"
          ],
          correct: 3,
          explanation:
            "ACIDは原子性・一貫性・独立性（隔離性）・永続性を表します。"
        },

        {
          id: "d12",
          name: "COMMITナイト",
          question:
            "トランザクションの処理結果を確定する操作は？",
          answers: [
            "ROLLBACK",
            "COMMIT",
            "SELECT",
            "LOCK"
          ],
          correct: 1,
          explanation:
            "COMMITは、トランザクションによる変更を確定します。"
        },

        {
          id: "d13",
          name: "ROLLBACKゴースト",
          question:
            "トランザクションの処理を取り消し、以前の状態に戻す操作は？",
          answers: [
            "COMMIT",
            "ROLLBACK",
            "GRANT",
            "JOIN"
          ],
          correct: 1,
          explanation:
            "ROLLBACKは、トランザクションによる変更を取り消します。"
        },

        {
          id: "d14",
          name: "デッドロックドラゴン",
          question:
            "複数のトランザクションが互いのロック解除を待ち続け、処理できなくなる状態は？",
          answers: [
            "ロールバック",
            "デッドロック",
            "チェックポイント",
            "レプリケーション"
          ],
          correct: 1,
          explanation:
            "互いが保持する資源の解放を待ち続ける状態をデッドロックと呼びます。"
        },

        {
          id: "d15",
          name: "インデックスゴーレム",
          question:
            "データベースで検索処理を高速化するために使用されるものは？",
          answers: [
            "インデックス",
            "ロールバック",
            "外部キー",
            "ビューだけ"
          ],
          correct: 0,
          explanation:
            "インデックスは検索を高速化できますが、追加・更新時には管理コストが発生します。"
        },

        {
  id: "d26",
  monster: "ロックナイト",
  question: "複数のトランザクションが同じデータを同時に更新しないよう制御する仕組みはどれ？",
  answers: [
    "排他制御",
    "正規化",
    "インデックス",
    "レプリケーション"
  ],
  correct: 0,
  explanation:
    "排他制御は、複数のトランザクションによるデータへの同時アクセスを制御し、整合性を保つために使用します。"
},
{
  id: "d27",
  monster: "ログゴースト",
  question: "データベース障害からの復旧に利用する、更新前後の情報などを記録したものはどれ？",
  answers: [
    "ログ",
    "ビュー",
    "主キー",
    "スキーマ"
  ],
  correct: 0,
  explanation:
    "ログにはデータベースの更新情報などが記録され、障害発生時の復旧処理に利用されます。"
},
{
  id: "d28",
  monster: "ロールフォワードメイジ",
  question: "バックアップを復元した後、ログを使って障害発生直前の状態まで更新内容を反映する処理はどれ？",
  answers: [
    "ロールバック",
    "ロールフォワード",
    "コミット",
    "正規化"
  ],
  correct: 1,
  explanation:
    "ロールフォワードは、バックアップ復元後にログの更新情報を反映して、障害発生前の状態へ近づける処理です。"
},
{
  id: "d29",
  monster: "レプリカゴーレム",
  question: "同じデータを複数のデータベースに複製して保持する仕組みはどれ？",
  answers: [
    "レプリケーション",
    "正規化",
    "排他制御",
    "射影"
  ],
  correct: 0,
  explanation:
    "レプリケーションは、データを複数のサーバなどに複製して保持する仕組みです。"
},
{
  id: "d30",
  monster: "分離性ドラゴン",
  question: "ACID特性のうち、複数のトランザクションを同時実行しても互いに影響しない性質はどれ？",
  answers: [
    "原子性",
    "一貫性",
    "独立性",
    "耐久性"
  ],
  correct: 2,
  explanation:
    "独立性（Isolation）は、複数のトランザクションを同時実行しても、互いの処理が不適切に干渉しない性質です。"
}

      ]

    }

  },

  boss: {
    name: "データベースの冥王",
    questionCount: 10
  }

},


  algorithm: {

  name: "アルゴリズムの森",
  icon: "🌲",

  stages: {

    // ===============================
    // STAGE 1：アルゴリズム基礎
    // ===============================

    stage1: {

      name: "アルゴリズム基礎",

      questions: [

        {
          id: "a1",
          name: "計算量スライム",
          question:
            "入力データ数nに比例して処理時間が増えるアルゴリズムの時間計算量は？",
          answers: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
          ],
          correct: 2,
          explanation:
            "入力データ数nに比例する処理の時間計算量はO(n)です。"
        },

        {
          id: "a2",
          name: "線形探索ゴースト",
          question:
            "データを先頭から順番に調べて目的の値を探す方法は？",
          answers: [
            "線形探索",
            "二分探索",
            "深さ優先探索",
            "ハッシュ探索"
          ],
          correct: 0,
          explanation:
            "線形探索は、データを先頭から一つずつ順番に調べます。"
        },

        {
          id: "a3",
          name: "二分探索ナイト",
          question:
            "二分探索を行うために、探索対象のデータに必要な条件は？",
          answers: [
            "暗号化されている",
            "整列されている",
            "重複がない",
            "必ず配列ではない"
          ],
          correct: 1,
          explanation:
            "二分探索では、基本的に探索対象があらかじめ整列されている必要があります。"
        },

        {
          id: "a4",
          name: "スタックゴーレム",
          question:
            "最後に格納したデータを最初に取り出すデータ構造は？",
          answers: [
            "キュー",
            "スタック",
            "木構造",
            "ハッシュ表"
          ],
          correct: 1,
          explanation:
            "スタックはLIFO（Last In First Out）のデータ構造です。"
        },

        {
          id: "a5",
          name: "キューメイジ",
          question:
            "最初に格納したデータを最初に取り出すデータ構造は？",
          answers: [
            "スタック",
            "キュー",
            "ヒープ",
            "二分木"
          ],
          correct: 1,
          explanation:
            "キューはFIFO（First In First Out）のデータ構造です。"
        },

        {
  id: "a16",
  name: "計算量ゴースト",
  question: "二分探索の平均的な時間計算量はどれ？",
  answers: [
    "O(1)",
    "O(log n)",
    "O(n)",
    "O(n²)"
  ],
  correct: 1,
  explanation:
    "二分探索は探索範囲を半分ずつ絞り込むため、時間計算量はO(log n)です。"
},
{
  id: "a17",
  name: "探索スライム",
  question: "線形探索で、要素数がn個の場合の最悪時間計算量はどれ？",
  answers: [
    "O(1)",
    "O(log n)",
    "O(n)",
    "O(n²)"
  ],
  correct: 2,
  explanation:
    "線形探索では最悪の場合、n個すべての要素を確認するためO(n)です。"
},
{
  id: "a18",
  name: "スタックナイト",
  question: "スタックからデータを取り出す操作を何という？",
  answers: [
    "PUSH",
    "POP",
    "ENQUEUE",
    "DEQUEUE"
  ],
  correct: 1,
  explanation:
    "スタックへ追加する操作がPUSH、取り出す操作がPOPです。"
},
{
  id: "a19",
  name: "キューゴーレム",
  question: "キューにデータを追加する操作を何という？",
  answers: [
    "POP",
    "PUSH",
    "ENQUEUE",
    "DEQUEUE"
  ],
  correct: 2,
  explanation:
    "キューにデータを追加する操作をENQUEUE、取り出す操作をDEQUEUEといいます。"
},
{
  id: "a20",
  name: "オーダーメイジ",
  question: "次のうち、データ量nが大きくなったとき最も処理量の増加が小さいものはどれ？",
  answers: [
    "O(n²)",
    "O(n)",
    "O(log n)",
    "O(2ⁿ)"
  ],
  correct: 2,
  explanation:
    "この中ではO(log n)が最も増加が緩やかです。二分探索などで現れる計算量です。"
}

      ]

    },


    // ===============================
    // STAGE 2：データ構造
    // ===============================

    stage2: {

      name: "データ構造の森",

      questions: [

        {
          id: "a6",
          name: "配列スライム",
          question:
            "一般に、添字を指定して要素へ直接アクセスしやすいデータ構造は？",
          answers: [
            "配列",
            "スタックだけ",
            "木構造だけ",
            "グラフだけ"
          ],
          correct: 0,
          explanation:
            "配列は添字を利用して目的の要素へ直接アクセスできます。"
        },

        {
          id: "a7",
          name: "リストゴースト",
          question:
            "連結リストで、各要素が次の要素を示す情報をもつものは？",
          answers: [
            "ポインタ",
            "主キー",
            "ハッシュ値",
            "排他ロック"
          ],
          correct: 0,
          explanation:
            "連結リストでは、各要素が次の要素へのポインタなどを保持します。"
        },

        {
          id: "a8",
          name: "ツリーナイト",
          question:
            "木構造で、一番上に位置する節を何という？",
          answers: [
            "葉",
            "根",
            "枝",
            "子"
          ],
          correct: 1,
          explanation:
            "木構造の最上位の節を根（root）と呼びます。"
        },

        {
          id: "a9",
          name: "二分木ゴーレム",
          question:
            "二分木において、一つの節がもつことのできる子の最大数は？",
          answers: [
            "1",
            "2",
            "3",
            "制限なし"
          ],
          correct: 1,
          explanation:
            "二分木では、一つの節がもつ子は最大2個です。"
        },

        {
          id: "a10",
          name: "ハッシュメイジ",
          question:
            "キーから格納位置などを求めるために利用する関数は？",
          answers: [
            "再帰関数",
            "ハッシュ関数",
            "集約関数",
            "窓関数"
          ],
          correct: 1,
          explanation:
            "ハッシュ表では、ハッシュ関数によってキーから格納位置などを求めます。"
        },

        {
  id: "a21",
  name: "連結リストスライム",
  question: "単方向リストの各要素が保持するものとして適切なのはどれ？",
  answers: [
    "次の要素へのポインタ",
    "全要素のアドレス",
    "必ず二つの子要素",
    "ハッシュ値だけ"
  ],
  correct: 0,
  explanation:
    "単方向リストでは、各要素がデータと次の要素へのポインタを保持します。"
},
{
  id: "a22",
  name: "木構造ゴーレム",
  question: "木構造で、子を持たない節点を何という？",
  answers: [
    "根",
    "葉",
    "枝",
    "親"
  ],
  correct: 1,
  explanation:
    "木構造で子を持たない節点を葉（leaf）といいます。"
},
{
  id: "a23",
  name: "ハッシュゴースト",
  question: "異なるキーから同じハッシュ値が生成されることを何という？",
  answers: [
    "再帰",
    "衝突",
    "整列",
    "探索"
  ],
  correct: 1,
  explanation:
    "異なるキーが同じハッシュ値になることを衝突（collision）といいます。"
},
{
  id: "a24",
  name: "ヒープナイト",
  question: "ヒープを利用する代表的な用途はどれ？",
  answers: [
    "優先度付きキュー",
    "文字コード変換",
    "暗号化",
    "IPアドレス変換"
  ],
  correct: 0,
  explanation:
    "ヒープは最大値や最小値を効率よく取り出せるため、優先度付きキューなどに利用されます。"
},
{
  id: "a25",
  name: "二分探索木ドラゴン",
  question: "二分探索木で、ある節点より小さい値が配置されるのは基本的にどちら？",
  answers: [
    "左部分木",
    "右部分木",
    "根だけ",
    "どちらでも決まりはない"
  ],
  correct: 0,
  explanation:
    "二分探索木では、基本的に節点より小さい値を左部分木、大きい値を右部分木に配置します。"
}

      ]

    },


    // ===============================
    // STAGE 3：応用アルゴリズム
    // ===============================

    stage3: {

      name: "アルゴリズム深層部",

      questions: [

        {
          id: "a11",
          name: "ソートドラゴン",
          question:
            "隣り合う要素を比較・交換する処理を繰り返して整列する方法は？",
          answers: [
            "バブルソート",
            "二分探索",
            "幅優先探索",
            "ハッシュ法"
          ],
          correct: 0,
          explanation:
            "バブルソートは隣接する要素を比較し、必要に応じて交換する操作を繰り返します。"
        },

        {
          id: "a12",
          name: "再帰ファントム",
          question:
            "関数が自分自身を呼び出して処理する方法は？",
          answers: [
            "排他処理",
            "再帰処理",
            "並列処理",
            "ハッシュ処理"
          ],
          correct: 1,
          explanation:
            "自分自身を呼び出す処理を再帰と呼びます。終了条件を設定することが重要です。"
        },

        {
          id: "a13",
          name: "BFSナイト",
          question:
            "グラフ探索で、開始点に近い頂点から順に探索する方法は？",
          answers: [
            "深さ優先探索",
            "幅優先探索",
            "二分探索",
            "線形探索"
          ],
          correct: 1,
          explanation:
            "幅優先探索（BFS）は、開始点から近い頂点を順番に探索します。"
        },

        {
          id: "a14",
          name: "DFSゴースト",
          question:
            "グラフ探索で、一つの経路を進めるところまで深く探索してから戻る方法は？",
          answers: [
            "幅優先探索",
            "深さ優先探索",
            "線形探索",
            "二分探索"
          ],
          correct: 1,
          explanation:
            "深さ優先探索（DFS）は、一つの経路を深く探索してから戻って別の経路を調べます。"
        },

        {
          id: "a15",
          name: "DPエンシェント",
          question:
            "問題を部分問題に分け、その計算結果を再利用して効率化する手法は？",
          answers: [
            "動的計画法",
            "線形探索",
            "排他制御",
            "正規化"
          ],
          correct: 0,
          explanation:
            "動的計画法では部分問題の結果を保存・再利用し、同じ計算の繰返しを減らします。"
        },

        {
  id: "a26",
  name: "クイックソートナイト",
  question: "クイックソートで、データを二つのグループに分割する基準となる値を何という？",
  answers: [
    "ピボット",
    "ルート",
    "インデックス",
    "スタック"
  ],
  correct: 0,
  explanation:
    "クイックソートでは、ピボットと呼ばれる基準値を使ってデータを分割します。"
},
{
  id: "a27",
  name: "再帰ゴースト",
  question: "再帰処理で、終了条件を設定する主な理由はどれ？",
  answers: [
    "処理速度を必ずO(1)にするため",
    "無限に自分自身を呼び出すことを防ぐため",
    "データを暗号化するため",
    "メモリを使用しないようにするため"
  ],
  correct: 1,
  explanation:
    "再帰処理では終了条件がないと呼出しが続いてしまうため、適切な終了条件が必要です。"
},
{
  id: "a28",
  name: "BFSメイジ",
  question: "幅優先探索（BFS）で一般的に利用するデータ構造はどれ？",
  answers: [
    "スタック",
    "キュー",
    "ハッシュ表",
    "ヒープだけ"
  ],
  correct: 1,
  explanation:
    "幅優先探索では、先に発見した頂点から順に探索するためキューを利用します。"
},
{
  id: "a29",
  name: "DFSファントム",
  question: "深さ優先探索（DFS）で一般的に利用できるデータ構造はどれ？",
  answers: [
    "スタック",
    "キューだけ",
    "配列だけ",
    "ハッシュ表だけ"
  ],
  correct: 0,
  explanation:
    "深さ優先探索ではスタックを利用できます。再帰呼出しによって実装する方法もあります。"
},
{
  id: "a30",
  name: "動的計画法ドラゴン",
  question: "動的計画法（DP）の特徴として適切なのはどれ？",
  answers: [
    "計算結果を再利用して重複計算を減らす",
    "必ず全ての組合せを総当たりする",
    "データを暗号化して計算する",
    "常に再帰を使用しない"
  ],
  correct: 0,
  explanation:
    "動的計画法では部分問題の計算結果を保存・再利用し、同じ計算の繰返しを減らします。"
}

      ]

    }

  },

  boss: {
    name: "アルゴリズムの古代樹",
    questionCount: 10
  }

},


  management: {

  name: "マネジメント王国",
  icon: "🏰",

  stages: {

    // ===============================
    // STAGE 1：プロジェクト管理
    // ===============================

    stage1: {

      name: "プロジェクト管理",

      questions: [

        {
          id: "m1",
          name: "WBSスライム",
          question:
            "プロジェクトの作業を、管理可能な単位まで階層的に分解したものは？",
          answers: [
            "WBS",
            "SLA",
            "RFI",
            "DFD"
          ],
          correct: 0,
          explanation:
            "WBSは、プロジェクトで必要な作業を階層的に分解したものです。"
        },

        {
          id: "m2",
          name: "クリティカルパスナイト",
          question:
            "プロジェクト全体の所要期間を決定する、余裕時間が最も少ない作業経路は？",
          answers: [
            "クリティカルパス",
            "バックログ",
            "ベースライン",
            "マイルストーン"
          ],
          correct: 0,
          explanation:
            "クリティカルパス上の作業が遅れると、原則としてプロジェクト全体の完了も遅れます。"
        },

        {
          id: "m3",
          name: "EVMメイジ",
          question:
            "プロジェクトの進捗を、計画価値・出来高・実コストなどで評価する手法は？",
          answers: [
            "EVM",
            "SLA",
            "SWOT",
            "PERTだけ"
          ],
          correct: 0,
          explanation:
            "EVMは、コストとスケジュールの両面からプロジェクトの進捗を定量的に管理する手法です。"
        },

        {
          id: "m4",
          name: "リスクゴースト",
          question:
            "プロジェクト開始前に、発生する可能性のある問題を洗い出して対応を検討する活動は？",
          answers: [
            "リスク管理",
            "問題管理",
            "構成管理",
            "可用性管理"
          ],
          correct: 0,
          explanation:
            "リスク管理では、将来発生する可能性のある事象を特定・分析し、対応を計画します。"
        },

        {
          id: "m5",
          name: "ステークホルダー王",
          question:
            "プロジェクトに影響を与える、または影響を受ける個人や組織を何という？",
          answers: [
            "ステークホルダー",
            "インシデント",
            "スプリント",
            "ベンダだけ"
          ],
          correct: 0,
          explanation:
            "顧客、利用者、プロジェクトメンバーなど、プロジェクトと利害関係をもつ主体をステークホルダーと呼びます。"
        },

        {
  id: "m16",
  name: "ガントチャートゴーレム",
  question: "プロジェクトの作業予定を横棒で時系列に表す図はどれ？",
  answers: [
    "ガントチャート",
    "DFD",
    "ER図",
    "状態遷移図"
  ],
  correct: 0,
  explanation:
    "ガントチャートは、各作業の開始・終了時期などを横棒で表し、スケジュールを可視化します。"
},
{
  id: "m17",
  name: "マイルストーンナイト",
  question: "プロジェクトの進捗管理で、重要な節目となる時点を何という？",
  answers: [
    "マイルストーン",
    "スプリント",
    "インシデント",
    "ベースライン"
  ],
  correct: 0,
  explanation:
    "プロジェクトにおける重要な節目や中間目標となる時点をマイルストーンといいます。"
},
{
  id: "m18",
  name: "リスクメイジ",
  question: "リスク対応で、リスクの発生確率や影響を小さくする対応を何という？",
  answers: [
    "回避",
    "軽減",
    "受容",
    "移転"
  ],
  correct: 1,
  explanation:
    "リスクの発生確率や影響度を低下させる対応をリスク軽減といいます。"
},
{
  id: "m19",
  name: "クラッシングドラゴン",
  question: "追加の要員投入などによって、プロジェクト期間を短縮する手法はどれ？",
  answers: [
    "クラッシング",
    "ベンチマーキング",
    "ローリングウェーブ",
    "ペアプログラミング"
  ],
  correct: 0,
  explanation:
    "クラッシングは、追加コストを投入してクリティカルパス上の作業期間を短縮する手法です。"
},
{
  id: "m20",
  name: "EVMゴースト",
  question: "EVMで、計画時点までに完了する予定だった作業の予算額を表す指標はどれ？",
  answers: [
    "PV",
    "EV",
    "AC",
    "BAC"
  ],
  correct: 0,
  explanation:
    "PV（Planned Value）は、ある時点までに完了する予定だった作業の予算額です。"
}

      ]

    },


    // ===============================
    // STAGE 2：サービスマネジメント
    // ===============================

    stage2: {

      name: "サービス管理の城",

      questions: [

        {
          id: "m6",
          name: "SLAナイト",
          question:
            "サービス提供者と利用者の間で、サービス品質の水準などを合意したものは？",
          answers: [
            "SLA",
            "WBS",
            "RFP",
            "ER図"
          ],
          correct: 0,
          explanation:
            "SLAはService Level Agreementの略で、サービス水準について合意したものです。"
        },

        {
          id: "m7",
          name: "インシデントスライム",
          question:
            "サービスをできるだけ早く正常な状態へ復旧させることを重視する管理活動は？",
          answers: [
            "インシデント管理",
            "問題管理",
            "財務管理",
            "需要管理"
          ],
          correct: 0,
          explanation:
            "インシデント管理では、サービスへの影響を抑え、正常なサービスを早期に復旧することを重視します。"
        },

        {
          id: "m8",
          name: "問題管理ゴーレム",
          question:
            "インシデントの根本原因を分析し、再発防止につなげる管理活動は？",
          answers: [
            "問題管理",
            "インシデント管理",
            "アクセス管理",
            "容量管理"
          ],
          correct: 0,
          explanation:
            "問題管理では、インシデントの原因を分析し、再発防止や恒久的な解決を目指します。"
        },

        {
          id: "m9",
          name: "変更管理メイジ",
          question:
            "システムやサービスへの変更によるリスクを評価し、変更を適切に管理する活動は？",
          answers: [
            "変更管理",
            "問題管理",
            "需要管理",
            "財務管理"
          ],
          correct: 0,
          explanation:
            "変更管理では、変更に伴うリスクや影響を評価して適切に実施します。"
        },

        {
          id: "m10",
          name: "可用性ドラゴン",
          question:
            "必要なときにサービスを利用できる度合いを表すものは？",
          answers: [
            "可用性",
            "機密性",
            "移植性",
            "保守性だけ"
          ],
          correct: 0,
          explanation:
            "可用性は、利用者が必要なときにシステムやサービスを利用できる度合いです。"
        },

        {
  id: "m21",
  name: "サービスデスクナイト",
  question: "利用者からの問合せや障害報告を受け付ける単一の窓口を何という？",
  answers: [
    "サービスデスク",
    "変更諮問委員会",
    "プロジェクトオフィス",
    "監査部門"
  ],
  correct: 0,
  explanation:
    "サービスデスクは、利用者からの問合せやインシデント報告などを受け付ける窓口です。"
},
{
  id: "m22",
  name: "SLAゴーレム",
  question: "SLAで合意する内容として最も適切なものはどれ？",
  answers: [
    "サービスの品質水準",
    "プログラムのソースコード",
    "社員の給与",
    "データベースの正規形"
  ],
  correct: 0,
  explanation:
    "SLAは、サービス提供者と利用者の間でサービスレベルについて合意するものです。"
},
{
  id: "m23",
  name: "インシデントゴースト",
  question: "インシデント管理の主な目的はどれ？",
  answers: [
    "サービスをできるだけ早く正常な状態へ戻す",
    "障害の根本原因を必ず特定する",
    "新しいシステムを開発する",
    "経営戦略を策定する"
  ],
  correct: 0,
  explanation:
    "インシデント管理では、サービスへの影響を抑え、できるだけ早く正常なサービスへ復旧させることを重視します。"
},
{
  id: "m24",
  name: "問題管理メイジ",
  question: "問題管理の主な目的として適切なものはどれ？",
  answers: [
    "インシデントの根本原因を特定し再発を防ぐ",
    "利用者からの電話だけを受け付ける",
    "プロジェクトの予算を決める",
    "売上高を計算する"
  ],
  correct: 0,
  explanation:
    "問題管理では、インシデントの根本原因を分析し、再発防止につなげます。"
},
{
  id: "m25",
  name: "可用性ドラゴン",
  question: "あるサービスの稼働時間が990時間、停止時間が10時間だった。可用性は何％？",
  answers: [
    "90%",
    "95%",
    "99%",
    "99.9%"
  ],
  correct: 2,
  explanation:
    "可用性＝稼働時間÷総時間なので、990÷(990＋10)＝0.99、つまり99％です。"
}

      ]

    },


    // ===============================
    // STAGE 3：開発マネジメント
    // ===============================

    stage3: {

      name: "開発マネジメント宮殿",

      questions: [

        {
          id: "m11",
          name: "アジャイルナイト",
          question:
            "短い開発サイクルを繰り返し、変化に対応しながら開発を進める考え方は？",
          answers: [
            "アジャイル開発",
            "ウォーターフォールだけ",
            "ビッグバン移行",
            "一括調達"
          ],
          correct: 0,
          explanation:
            "アジャイル開発では、短いサイクルで開発とフィードバックを繰り返します。"
        },

        {
          id: "m12",
          name: "スクラムゴーレム",
          question:
            "スクラムで、一定期間に区切って開発を行う反復単位は？",
          answers: [
            "スプリント",
            "インシデント",
            "マイルストーンだけ",
            "サービスデスク"
          ],
          correct: 0,
          explanation:
            "スクラムでは、一定期間の反復開発単位をスプリントと呼びます。"
        },

        {
          id: "m13",
          name: "バックログメイジ",
          question:
            "スクラムで、製品に必要な機能や改善事項などを優先順位付きで管理する一覧は？",
          answers: [
            "プロダクトバックログ",
            "WBS",
            "障害管理表",
            "SLA"
          ],
          correct: 0,
          explanation:
            "プロダクトバックログには、製品に必要な機能や改善項目などを優先順位付きで管理します。"
        },

        {
          id: "m14",
          name: "DevOpsドラゴン",
          question:
            "開発と運用が連携し、継続的かつ迅速にサービスを改善していく考え方は？",
          answers: [
            "DevOps",
            "BPR",
            "EVM",
            "BCP"
          ],
          correct: 0,
          explanation:
            "DevOpsはDevelopmentとOperationsの連携を重視し、継続的な開発・提供・改善を目指します。"
        },

        {
          id: "m15",
          name: "DORAファントム",
          question:
            "DORAの代表的な指標に含まれるものは？",
          answers: [
            "デプロイ頻度",
            "売上高営業利益率",
            "自己資本比率",
            "在庫回転率"
          ],
          correct: 0,
          explanation:
            "DORAでは、デプロイ頻度、変更のリードタイム、変更失敗率、復旧時間などを用いてソフトウェアデリバリーのパフォーマンスを捉えます。"
        },

       {
  id: "m26",
  name: "スクラムマスターナイト",
  question: "スクラムマスターの役割として最も適切なものはどれ？",
  answers: [
    "開発チームの作業を全て指示する",
    "スクラムが円滑に進むよう支援する",
    "製品の予算だけを管理する",
    "全てのプログラムを自分で作成する"
  ],
  correct: 1,
  explanation:
    "スクラムマスターは、スクラムの理解と実践を支援し、チームが円滑に活動できるようサポートします。"
},
{
  id: "m27",
  name: "プロダクトオーナーメイジ",
  question: "スクラムでプロダクトバックログの内容や優先順位に責任を持つのは誰？",
  answers: [
    "スクラムマスター",
    "プロダクトオーナー",
    "サービスデスク",
    "プロジェクト監査人"
  ],
  correct: 1,
  explanation:
    "プロダクトオーナーは、プロダクト価値の最大化を目指し、プロダクトバックログを管理します。"
},
{
  id: "m28",
  name: "スプリントゴーレム",
  question: "スクラムで、開発を行う一定期間の反復単位を何という？",
  answers: [
    "スプリント",
    "インシデント",
    "マイルストーン",
    "SLA"
  ],
  correct: 0,
  explanation:
    "スクラムでは、一定期間の開発サイクルをスプリントと呼びます。"
},
{
  id: "m29",
  name: "CIドラゴン",
  question: "CI（継続的インテグレーション）の説明として適切なものはどれ？",
  answers: [
    "コード変更を頻繁に統合し、自動ビルドやテストを行う",
    "完成するまでコードを統合しない",
    "システムを手作業だけでテストする",
    "本番障害の記録だけを行う"
  ],
  correct: 0,
  explanation:
    "CIではコード変更を継続的に統合し、自動ビルドや自動テストなどによって問題を早期に発見します。"
},
{
  id: "m30",
  name: "DORAドラゴン",
  question: "DORAの指標に含まれないものはどれ？",
  answers: [
    "デプロイ頻度",
    "変更のリードタイム",
    "変更障害率",
    "CPU使用率"
  ],
  correct: 3,
  explanation:
    "DORAではソフトウェアデリバリーのパフォーマンスを測ります。CPU使用率はDORAの指標ではありません。"
} 

      ]

    }

  },

  boss: {
    name: "マネジメントの覇王",
    questionCount: 10
  }

},


  strategy: {

  name: "ストラテジ帝国",
  icon: "📊",

  stages: {

    // ===============================
    // STAGE 1：経営戦略
    // ===============================

    stage1: {

      name: "経営戦略の城門",

      questions: [

        {
          id: "st1",
          name: "SWOTスライム",
          question:
            "SWOT分析で、企業内部のプラス要因を表すものは？",
          answers: [
            "Strength",
            "Weakness",
            "Opportunity",
            "Threat"
          ],
          correct: 0,
          explanation:
            "Strength（強み）は企業内部のプラス要因です。Weaknessは弱み、OpportunityとThreatは外部環境の要因です。"
        },

        {
          id: "st2",
          name: "PPMゴーレム",
          question:
            "PPMで、市場成長率と相対的市場シェアがともに高い事業は？",
          answers: [
            "花形",
            "金のなる木",
            "問題児",
            "負け犬"
          ],
          correct: 0,
          explanation:
            "市場成長率・相対的市場シェアがともに高い事業は「花形」です。"
        },

        {
          id: "st3",
          name: "差別化ナイト",
          question:
            "競合他社とは異なる独自の価値を提供して競争優位を目指す戦略は？",
          answers: [
            "差別化戦略",
            "撤退戦略",
            "垂直統合だけ",
            "アウトソーシング"
          ],
          correct: 0,
          explanation:
            "差別化戦略では、製品やサービスに独自性を持たせることで競争優位を目指します。"
        },

        {
          id: "st4",
          name: "コアコンピタンスメイジ",
          question:
            "競合他社には容易にまねできない、企業の中核となる能力を何という？",
          answers: [
            "コアコンピタンス",
            "ベンチマーク",
            "ステークホルダー",
            "キャッシュフロー"
          ],
          correct: 0,
          explanation:
            "コアコンピタンスは、他社が容易に模倣できない企業独自の中核的な能力です。"
        },

        {
          id: "st5",
          name: "ベンチマークゴースト",
          question:
            "優れた企業や業務プロセスを基準として、自社の改善につなげる手法は？",
          answers: [
            "ベンチマーキング",
            "デバッグ",
            "プロトタイピング",
            "正規化"
          ],
          correct: 0,
          explanation:
            "ベンチマーキングでは、優れた事例と自社を比較して改善につなげます。"
        },

        {
  id: "st16",
  name: "3C分析メイジ",
  question: "3C分析の三つのCに含まれないものはどれ？",
  answers: [
    "Customer",
    "Competitor",
    "Company",
    "Cost"
  ],
  correct: 3,
  explanation:
    "3C分析では、Customer（市場・顧客）、Competitor（競合）、Company（自社）の三つの視点から分析します。"
},
{
  id: "st17",
  name: "PESTゴースト",
  question: "PEST分析で、Tが表すものはどれ？",
  answers: [
    "技術的要因",
    "経済的要因",
    "政治的要因",
    "社会的要因"
  ],
  correct: 0,
  explanation:
    "PESTのTはTechnological（技術的要因）を表します。"
},
{
  id: "st18",
  name: "市場シェアナイト",
  question: "ある企業の売上高が200億円、市場全体の売上高が1,000億円の場合、市場占有率は何％？",
  answers: [
    "10%",
    "20%",
    "25%",
    "50%"
  ],
  correct: 1,
  explanation:
    "市場占有率は200÷1,000×100＝20％です。"
},
{
  id: "st19",
  name: "ブルーオーシャンドラゴン",
  question: "競争の激しい既存市場を避け、新しい市場を創造する戦略を何という？",
  answers: [
    "コストリーダーシップ戦略",
    "ブルーオーシャン戦略",
    "撤退戦略",
    "集中戦略"
  ],
  correct: 1,
  explanation:
    "ブルーオーシャン戦略は、競争の少ない新しい市場を創造することを目指す戦略です。"
},
{
  id: "st20",
  name: "アンゾフゴーレム",
  question: "アンゾフの成長マトリクスで、既存市場に既存製品を投入して成長を目指す戦略はどれ？",
  answers: [
    "市場浸透",
    "市場開拓",
    "製品開発",
    "多角化"
  ],
  correct: 0,
  explanation:
    "既存市場×既存製品で成長を目指す戦略を市場浸透戦略といいます。"
}

      ]

    },


    // ===============================
    // STAGE 2：企業と会計
    // ===============================

    stage2: {

      name: "財務の大宮殿",

      questions: [

        {
          id: "st6",
          name: "損益分岐点ドラゴン",
          question:
            "売上高と総費用が等しく、利益が0になる売上高を何という？",
          answers: [
            "損益分岐点売上高",
            "限界利益",
            "営業利益",
            "自己資本"
          ],
          correct: 0,
          explanation:
            "損益分岐点では売上高と総費用が等しくなり、利益は0になります。"
        },

        {
          id: "st7",
          name: "ROEナイト",
          question:
            "自己資本に対して、どれだけ利益を上げたかを見る代表的な指標は？",
          answers: [
            "ROE",
            "SLA",
            "MTBF",
            "WBS"
          ],
          correct: 0,
          explanation:
            "ROEは自己資本利益率で、自己資本に対する利益の割合を表します。"
        },

        {
          id: "st8",
          name: "ROIメイジ",
          question:
            "投資額に対して、どれだけ利益を得たかを評価する代表的な指標は？",
          answers: [
            "ROI",
            "RFP",
            "BPR",
            "SLA"
          ],
          correct: 0,
          explanation:
            "ROIはReturn on Investmentの略で、投資に対する利益の割合を評価します。"
        },

        {
          id: "st9",
          name: "変動費スライム",
          question:
            "一般に、生産量や販売量の増減に応じて変化する費用は？",
          answers: [
            "変動費",
            "固定費",
            "自己資本",
            "減価償却累計額"
          ],
          correct: 0,
          explanation:
            "変動費は、生産量や販売量などの活動量に応じて増減する費用です。"
        },

        {
          id: "st10",
          name: "減価償却ゴーレム",
          question:
            "固定資産の取得原価を、使用可能期間などにわたって費用配分する手続は？",
          answers: [
            "減価償却",
            "棚卸",
            "引当",
            "増資"
          ],
          correct: 0,
          explanation:
            "減価償却では、固定資産の取得原価を耐用期間などにわたって費用として配分します。"
        },

        {
  id: "st21",
  name: "売上総利益スライム",
  question: "売上高から売上原価を差し引いて求める利益はどれ？",
  answers: [
    "売上総利益",
    "営業利益",
    "経常利益",
    "当期純利益"
  ],
  correct: 0,
  explanation:
    "売上総利益は、売上高から売上原価を差し引いて求めます。粗利益とも呼ばれます。"
},
{
  id: "st22",
  name: "営業利益ナイト",
  question: "売上総利益から販売費及び一般管理費を差し引いて求める利益はどれ？",
  answers: [
    "売上総利益",
    "営業利益",
    "経常利益",
    "当期純利益"
  ],
  correct: 1,
  explanation:
    "営業利益は、売上総利益から販売費及び一般管理費を差し引いて求めます。"
},
{
  id: "st23",
  name: "損益分岐点ゴーレム",
  question: "固定費が300万円、限界利益率が30％のとき、損益分岐点売上高はいくら？",
  answers: [
    "300万円",
    "600万円",
    "900万円",
    "1,000万円"
  ],
  correct: 3,
  explanation:
    "損益分岐点売上高＝固定費÷限界利益率なので、300万円÷0.3＝1,000万円です。"
},
{
  id: "st24",
  name: "ROAメイジ",
  question: "ROA（総資産利益率）の計算で、利益と比較するものはどれ？",
  answers: [
    "総資産",
    "売上高",
    "従業員数",
    "固定費"
  ],
  correct: 0,
  explanation:
    "ROAは、企業が保有する総資産を使ってどれだけ利益を生み出したかを見る指標です。"
},
{
  id: "st25",
  name: "キャッシュフロードラゴン",
  question: "キャッシュフロー計算書で、本業による現金の増減を示すものはどれ？",
  answers: [
    "営業活動によるキャッシュフロー",
    "投資活動によるキャッシュフロー",
    "財務活動によるキャッシュフロー",
    "減価償却費"
  ],
  correct: 0,
  explanation:
    "本業による現金の増減は、営業活動によるキャッシュフローに区分されます。"
}

      ]

    },


    // ===============================
    // STAGE 3：システム戦略
    // ===============================

    stage3: {

      name: "システム戦略の皇城",

      questions: [

        {
          id: "st11",
          name: "BPRドラゴン",
          question:
            "既存の業務プロセスを根本的に見直し、抜本的に再設計する考え方は？",
          answers: [
            "BPR",
            "SLA",
            "EVM",
            "RAID"
          ],
          correct: 0,
          explanation:
            "BPRはBusiness Process Re-engineeringの略で、業務プロセスを根本から再設計します。"
        },

        {
          id: "st12",
          name: "RFPナイト",
          question:
            "システム導入などで、発注側がベンダに具体的な提案を依頼する文書は？",
          answers: [
            "RFP",
            "RFI",
            "SLA",
            "WBS"
          ],
          correct: 0,
          explanation:
            "RFPはRequest for Proposalの略で、発注側がベンダに具体的な提案を求める文書です。"
        },

        {
          id: "st13",
          name: "BSCメイジ",
          question:
            "財務・顧客・内部ビジネスプロセス・学習と成長などの視点から戦略を評価する手法は？",
          answers: [
            "BSC",
            "BCP",
            "BPR",
            "PPM"
          ],
          correct: 0,
          explanation:
            "BSC（バランススコアカード）は複数の視点から戦略目標や業績を管理します。"
        },

        {
          id: "st14",
          name: "CRMファントム",
          question:
            "顧客との関係を継続的に管理し、顧客満足や収益向上につなげる考え方は？",
          answers: [
            "CRM",
            "SCM",
            "ERPだけ",
            "EVM"
          ],
          correct: 0,
          explanation:
            "CRMはCustomer Relationship Managementの略で、顧客との関係管理を重視します。"
        },

        {
          id: "st15",
          name: "SCMエンペラー",
          question:
            "調達・生産・物流・販売など、供給に関わる一連の流れを全体最適化する考え方は？",
          answers: [
            "SCM",
            "CRM",
            "SLA",
            "SWOT"
          ],
          correct: 0,
          explanation:
            "SCMはSupply Chain Managementの略で、供給に関わる一連の活動を全体的に管理・最適化します。"
        },

        {
  id: "st26",
  name: "DXドラゴン",
  question: "DX（デジタルトランスフォーメーション）の説明として最も適切なものはどれ？",
  answers: [
    "デジタル技術を活用してビジネスや組織を変革する",
    "紙の資料をPDFに変換することだけを指す",
    "既存システムを必ず廃止する",
    "全ての業務を外部委託する"
  ],
  correct: 0,
  explanation:
    "DXは、データやデジタル技術を活用して、製品・サービスやビジネスモデル、業務などを変革する取組です。"
},
{
  id: "st27",
  name: "RFIメイジ",
  question: "システム導入の検討時に、ベンダから技術や製品などの情報を収集するための文書はどれ？",
  answers: [
    "RFI",
    "RFP",
    "SLA",
    "WBS"
  ],
  correct: 0,
  explanation:
    "RFI（Request For Information）は、ベンダなどから情報を収集するための情報提供依頼書です。"
},
{
  id: "st28",
  name: "BSCナイト",
  question: "BSC（バランススコアカード）の四つの視点に含まれないものはどれ？",
  answers: [
    "財務",
    "顧客",
    "内部ビジネスプロセス",
    "競合企業"
  ],
  correct: 3,
  explanation:
    "BSCは、財務・顧客・内部ビジネスプロセス・学習と成長の四つの視点から戦略を評価します。"
},
{
  id: "st29",
  name: "ERPゴーレム",
  question: "企業全体の経営資源を統合的に管理する考え方やシステムを表すものはどれ？",
  answers: [
    "ERP",
    "CRM",
    "SCM",
    "RPA"
  ],
  correct: 0,
  explanation:
    "ERPは、企業のヒト・モノ・カネ・情報などの経営資源を統合的に管理し、効率化を図る考え方です。"
},
{
  id: "st30",
  name: "RPAファントム",
  question: "定型的なパソコン操作をソフトウェアロボットで自動化する仕組みはどれ？",
  answers: [
    "RPA",
    "SCM",
    "CRM",
    "BPR"
  ],
  correct: 0,
  explanation:
    "RPAは、定型的・反復的なPC操作をソフトウェアロボットによって自動化する仕組みです。"
}

      ]

    }

  },

  boss: {
    name: "ストラテジ帝国皇帝",
    questionCount: 10
  }

}

};


// =====================================
// 2. SAVE DATA
// =====================================

let totalExp =
  Number(
    localStorage.getItem(
      "apQuestTotalExp"
    )
  ) || 0;


let reviewMonsters =
  JSON.parse(
    localStorage.getItem(
      "apQuestMonsters"
    )
  ) || [];


// Ver.0.5のセーブデータを
// そのまま引き継ぐ

const progressData = {

  network: {

    stage1:
      Number(
        localStorage.getItem(
          "apQuestNetworkStage1"
        )
      ) || 0,

    stage2:
      Number(
        localStorage.getItem(
          "apQuestNetworkStage2"
        )
      ) || 0,

    stage3:
      Number(
        localStorage.getItem(
          "apQuestNetworkStage3"
        )
      ) || 0,

    boss:
      Number(
        localStorage.getItem(
          "apQuestNetworkBoss"
        )
      ) || 0

  },


  security: {

    stage1:
      Number(
        localStorage.getItem(
          "apQuestSecurityStage1"
        )
      ) || 0,

    stage2:
      Number(
        localStorage.getItem(
          "apQuestSecurityStage2"
        )
      ) || 0,

    stage3:
      Number(
        localStorage.getItem(
          "apQuestSecurityStage3"
        )
      ) || 0,

    boss:
      Number(
        localStorage.getItem(
          "apQuestSecurityBoss"
        )
      ) || 0


  },

  database: {

    stage1:
      Number(
        localStorage.getItem(
          "apQuestDatabaseStage1"
        )
      ) || 0,

    stage2:
      Number(
        localStorage.getItem(
          "apQuestDatabaseStage2"
        )
      ) || 0,

    stage3:
      Number(
        localStorage.getItem(
          "apQuestDatabaseStage3"
        )
      ) || 0,

    boss:
      Number(
        localStorage.getItem(
          "apQuestDatabaseBoss"
        )
      ) || 0

  },

    algorithm: {

    stage1:
      Number(
        localStorage.getItem(
          "apQuestAlgorithmStage1"
        )
      ) || 0,

    stage2:
      Number(
        localStorage.getItem(
          "apQuestAlgorithmStage2"
        )
      ) || 0,

    stage3:
      Number(
        localStorage.getItem(
          "apQuestAlgorithmStage3"
        )
      ) || 0,

    boss:
      Number(
        localStorage.getItem(
          "apQuestAlgorithmBoss"
        )
      ) || 0

  },

  management: {

  stage1:
    Number(
      localStorage.getItem(
        "apQuestManagementStage1"
      )
    ) || 0,

  stage2:
    Number(
      localStorage.getItem(
        "apQuestManagementStage2"
      )
    ) || 0,

  stage3:
    Number(
      localStorage.getItem(
        "apQuestManagementStage3"
      )
    ) || 0,

  boss:
    Number(
      localStorage.getItem(
        "apQuestManagementBoss"
      )
    ) || 0

},

  strategy: {

  stage1:
    Number(
      localStorage.getItem(
        "apQuestStrategyStage1"
      )
    ) || 0,

  stage2:
    Number(
      localStorage.getItem(
        "apQuestStrategyStage2"
      )
    ) || 0,

  stage3:
    Number(
      localStorage.getItem(
        "apQuestStrategyStage3"
      )
    ) || 0,

  boss:
    Number(
      localStorage.getItem(
        "apQuestStrategyBoss"
      )
    ) || 0

}

};


// =====================================
// 3. PLAYER
// =====================================

let level = 1;

let exp = 0;

let nextExp = 100;


// =====================================
// 4. STREAK
// =====================================

let streak =
  Number(
    localStorage.getItem(
      "apQuestStreak"
    )
  ) || 0;


let lastStudyDate =
  localStorage.getItem(
    "apQuestLastStudyDate"
  );


// =====================================
// 5. GAME STATE
// =====================================

let currentArea =
  "network";


let currentStage =
  "stage1";


let currentQuestion =
  0;


let correctCount =
  0;


let currentQuestions =
  [];

let isFinalTrial = false;

let currentMonsterIndex =
  0;


// =====================================
// 6. HTML
// =====================================

const homeScreen =
  document.getElementById(
    "homeScreen"
  );

const mapScreen =
  document.getElementById(
    "mapScreen"
  );

const stageScreen =
  document.getElementById(
    "stageScreen"
  );

const battleScreen =
  document.getElementById(
    "battleScreen"
  );

const clearScreen =
  document.getElementById(
    "clearScreen"
  );

const dungeonScreen =
  document.getElementById(
    "dungeonScreen"
  );


const mapButton =
  document.getElementById(
    "mapButton"
  );

const mapBackButton =
  document.getElementById(
    "mapBackButton"
  );

const networkWorld =
  document.getElementById(
    "networkWorld"
  );

const securityWorld =
  document.getElementById(
    "securityWorld"
  );

const databaseWorld =
  document.getElementById(
    "databaseWorld"
  );

const algorithmWorld =
  document.getElementById(
    "algorithmWorld"
  );

const managementWorld =
  document.getElementById(
    "managementWorld"
  );

const strategyWorld =
  document.getElementById(
    "strategyWorld"
  );

const finalWorld =
  document.getElementById(
    "finalWorld"
  );

const finalStatus =
  document.getElementById(
    "finalStatus"
  );

const exportSaveButton =
  document.getElementById(
    "exportSaveButton"
  );

const importSaveButton =
  document.getElementById(
    "importSaveButton"
  );

const stageBackButton =
  document.getElementById(
    "stageBackButton"
  );


const stage1Button =
  document.getElementById(
    "stage1Button"
  );

const stage2Button =
  document.getElementById(
    "stage2Button"
  );

const stage3Button =
  document.getElementById(
    "stage3Button"
  );

const bossButton =
  document.getElementById(
    "bossButton"
  );


const nextButton =
  document.getElementById(
    "nextButton"
  );


const clearStageButton =
  document.getElementById(
    "clearStageButton"
  );

const clearHomeButton =
  document.getElementById(
    "clearHomeButton"
  );


const dungeonButton =
  document.getElementById(
    "dungeonButton"
  );

const nextMonsterButton =
  document.getElementById(
    "nextMonsterButton"
  );

const backHomeButton =
  document.getElementById(
    "backHomeButton"
  );


// =====================================
// 7. SCREEN
// =====================================

function hideAllScreens() {

  homeScreen.classList.add(
    "hidden"
  );

  mapScreen.classList.add(
    "hidden"
  );

  stageScreen.classList.add(
    "hidden"
  );

  battleScreen.classList.add(
    "hidden"
  );

  clearScreen.classList.add(
    "hidden"
  );

  dungeonScreen.classList.add(
    "hidden"
  );

}


// =====================================
// 8. LEVEL
// =====================================

function calculateLevel() {

  let remainingExp =
    totalExp;


  level = 1;

  nextExp = 100;


  while (
    remainingExp >= nextExp
  ) {

    remainingExp -=
      nextExp;

    level++;

    nextExp =
      100 +
      (level - 1) * 20;

  }


  exp =
    remainingExp;

}


// =====================================
// 9. LEVEL UP
// =====================================

function showLevelUp(
  oldLevel,
  newLevel
) {

  const overlay =
    document.createElement(
      "div"
    );


  overlay.className =
    "level-up-overlay";


  overlay.innerHTML = `

    <div class="level-up-box">

      <div class="level-up-stars">
        ✨ ⚔️ ✨
      </div>

      <h1>LEVEL UP!</h1>

      <p>冒険者</p>

      <h2>
        Lv.${oldLevel}
        →
        Lv.${newLevel}
      </h2>

      <p>
        新たな力を手に入れた！
      </p>

      <button id="levelUpClose">
        冒険を続ける
      </button>

    </div>

  `;


  document.body.appendChild(
    overlay
  );


  document
    .getElementById(
      "levelUpClose"
    )
    .addEventListener(
      "click",
      function () {

        overlay.remove();

      }
    );

}


// =====================================
// 10. TITLE
// =====================================

function updateTitle() {

  let title =
    "駆け出し冒険者";


  if (level >= 2) {
    title =
      "見習いエンジニア";
  }


  if (level >= 3) {
    title =
      "知識の探索者";
  }


  if (level >= 5) {
    title =
      "IT冒険者";
  }


  if (level >= 10) {
    title =
      "応用情報の勇者";
  }


  document
    .getElementById(
      "titleText"
    )
    .textContent =
    title;

}


// =====================================
// 11. PLAYER DISPLAY
// =====================================

function updatePlayer(
  checkLevelUp = true
) {

  const oldLevel =
    level;


  calculateLevel();


  if (
    checkLevelUp &&
    level > oldLevel
  ) {

    showLevelUp(
      oldLevel,
      level
    );

  }


  document
    .getElementById(
      "levelText"
    )
    .textContent =
    level;


  document
    .getElementById(
      "expText"
    )
    .textContent =
    exp;


  document
    .getElementById(
      "nextExpText"
    )
    .textContent =
    nextExp;


  document
    .getElementById(
      "totalExpText"
    )
    .textContent =
    totalExp;


  const percent =
    (exp / nextExp) * 100;


  document
    .getElementById(
      "expBar"
    )
    .style.width =
    percent + "%";


  localStorage.setItem(
    "apQuestTotalExp",
    totalExp
  );


  updateTitle();

}


// =====================================
// 12. STREAK
// =====================================

function updateStreak() {

  document
    .getElementById(
      "streakText"
    )
    .textContent =
    streak;

}


function recordStudyDay() {

  const today =
    new Date()
      .toLocaleDateString(
        "ja-JP"
      );


  if (
    lastStudyDate === today
  ) {

    return;

  }


  const yesterday =
    new Date();


  yesterday.setDate(
    yesterday.getDate() - 1
  );


  const yesterdayText =
    yesterday
      .toLocaleDateString(
        "ja-JP"
      );


  if (
    lastStudyDate ===
    yesterdayText
  ) {

    streak++;

  }

  else {

    streak = 1;

  }


  lastStudyDate =
    today;


  localStorage.setItem(
    "apQuestStreak",
    streak
  );


  localStorage.setItem(
    "apQuestLastStudyDate",
    today
  );


  updateStreak();

}


// =====================================
// 13. STAR SYSTEM
// =====================================

function getStars(rate) {

  if (rate === 100) {
    return 3;
  }


  if (rate >= 80) {
    return 2;
  }


  if (rate >= 60) {
    return 1;
  }


  return 0;

}


function starsText(stars) {

  return (
    "★".repeat(stars) +
    "☆".repeat(3 - stars)
  );

}


// =====================================
// 14. PROGRESS SAVE
// =====================================

// =====================================
// SAVE CODE EXPORT
// =====================================

function createSaveCode() {

  const saveData = {};

  for (
    let i = 0;
    i < localStorage.length;
    i++
  ) {

    const key =
      localStorage.key(i);

    if (
      key &&
      key.startsWith(
        "apQuest"
      )
    ) {

      saveData[key] =
        localStorage.getItem(
          key
        );

    }

  }

 return JSON.stringify(
  saveData
);

}

exportSaveButton.addEventListener(
  "click",
  async function () {

    const saveCode =
      createSaveCode();

    try {
      await navigator.clipboard.writeText(saveCode);

      alert(
        "セーブコードをコピーしました！\n" +
        "メモなどに貼り付けて保存してください。"
      );

    } catch (error) {

      prompt(
        "セーブコードをコピーしてください",
        saveCode
      );

    }

  }
);

// =====================================
// SAVE CODE IMPORT
// =====================================

importSaveButton.addEventListener(
  "click",
  function () {

    const saveCode =
      prompt(
        "セーブコードを貼り付けてください"
      );

    if (!saveCode) {
      return;
    }

    try {

      const saveData =
  JSON.parse(
    saveCode
  );

      Object.keys(
        saveData
      ).forEach(
        function (key) {

          if (
            key.startsWith(
              "apQuest"
            )
          ) {

            localStorage.setItem(
              key,
              saveData[key]
            );

          }

        }
      );

      alert(
        "セーブデータを読み込みました！"
      );

      location.reload();

    } catch (error) {
  alert(
    "読み込みエラー\n\n" +
    error.message
  );
}

  }
);

let finalTrialBest =
  Number(
    localStorage.getItem(
      "apQuestFinalTrial"
    )
  ) || 0;


function saveProgress() {

  localStorage.setItem(
    "apQuestNetworkStage1",
    progressData.network.stage1
  );

  localStorage.setItem(
    "apQuestNetworkStage2",
    progressData.network.stage2
  );

  localStorage.setItem(
    "apQuestNetworkStage3",
    progressData.network.stage3
  );

  localStorage.setItem(
    "apQuestNetworkBoss",
    progressData.network.boss
  );


  localStorage.setItem(
    "apQuestSecurityStage1",
    progressData.security.stage1
  );

  localStorage.setItem(
    "apQuestSecurityStage2",
    progressData.security.stage2
  );

  localStorage.setItem(
    "apQuestSecurityStage3",
    progressData.security.stage3
  );

  localStorage.setItem(
    "apQuestSecurityBoss",
    progressData.security.boss
  );

}

localStorage.setItem(
  "apQuestDatabaseStage1",
  progressData.database.stage1
);

localStorage.setItem(
  "apQuestDatabaseStage2",
  progressData.database.stage2
);

localStorage.setItem(
  "apQuestDatabaseStage3",
  progressData.database.stage3
);

localStorage.setItem(
  "apQuestDatabaseBoss",
  progressData.database.boss
);

localStorage.setItem(
  "apQuestAlgorithmStage1",
  progressData.algorithm.stage1
);

localStorage.setItem(
  "apQuestAlgorithmStage2",
  progressData.algorithm.stage2
);

localStorage.setItem(
  "apQuestAlgorithmStage3",
  progressData.algorithm.stage3
);

localStorage.setItem(
  "apQuestAlgorithmBoss",
  progressData.algorithm.boss
);

localStorage.setItem(
  "apQuestManagementStage1",
  progressData.management.stage1
);

localStorage.setItem(
  "apQuestManagementStage2",
  progressData.management.stage2
);

localStorage.setItem(
  "apQuestManagementStage3",
  progressData.management.stage3
);

localStorage.setItem(
  "apQuestManagementBoss",
  progressData.management.boss
);

localStorage.setItem(
  "apQuestStrategyStage1",
  progressData.strategy.stage1
);

localStorage.setItem(
  "apQuestStrategyStage2",
  progressData.strategy.stage2
);

localStorage.setItem(
  "apQuestStrategyStage3",
  progressData.strategy.stage3
);

localStorage.setItem(
  "apQuestStrategyBoss",
  progressData.strategy.boss
);

// =====================================
// 15. AREA DATA
// =====================================

function getAreaData() {

  return questionData[
    currentArea
  ];

}


function getCurrentProgress() {

  return progressData[
    currentArea
  ];

}


// =====================================
// 16. STAGE SELECT DISPLAY
// =====================================

function updateStageDisplay() {

  const area =
    getAreaData();


  const progress =
    getCurrentProgress();


  document
    .getElementById(
      "areaTitle"
    )
    .textContent =

    area.icon +
    " " +
    area.name;


  document
    .getElementById(
      "stage1Name"
    )
    .textContent =
    area.stages.stage1.name;


  document
    .getElementById(
      "stage2Name"
    )
    .textContent =
    area.stages.stage2.name;


  document
    .getElementById(
      "stage3Name"
    )
    .textContent =
    area.stages.stage3.name;


  document
    .getElementById(
      "bossName"
    )
    .textContent =
    area.boss.name;


  document
    .getElementById(
      "stage1Stars"
    )
    .textContent =
    starsText(
      progress.stage1
    );


  document
    .getElementById(
      "stage2Stars"
    )
    .textContent =
    starsText(
      progress.stage2
    );


  document
    .getElementById(
      "stage3Stars"
    )
    .textContent =
    starsText(
      progress.stage3
    );


  document
    .getElementById(
      "bossStars"
    )
    .textContent =
    starsText(
      progress.boss
    );


  // STAGE 2

  if (
    progress.stage1 >= 1
  ) {

    document
      .getElementById(
        "stage2Card"
      )
      .classList.remove(
        "locked-stage"
      );


    document
      .getElementById(
        "stage2Card"
      )
      .classList.add(
        "open-stage"
      );


    document
      .getElementById(
        "stage2Lock"
      )
      .classList.add(
        "hidden"
      );


    stage2Button
      .classList.remove(
        "hidden"
      );

  }


  // STAGE 3

  if (
    progress.stage2 >= 1
  ) {

    document
      .getElementById(
        "stage3Card"
      )
      .classList.remove(
        "locked-stage"
      );


    document
      .getElementById(
        "stage3Card"
      )
      .classList.add(
        "open-stage"
      );


    document
      .getElementById(
        "stage3Lock"
      )
      .classList.add(
        "hidden"
      );


    stage3Button
      .classList.remove(
        "hidden"
      );

  }


  // BOSS

  if (
    progress.stage3 >= 1
  ) {

    document
      .getElementById(
        "bossCard"
      )
      .classList.remove(
        "locked-stage"
      );


    document
      .getElementById(
        "bossLock"
      )
      .classList.add(
        "hidden"
      );


    bossButton
      .classList.remove(
        "hidden"
      );

  }


  updateWorldMap();

}


// =====================================
// 17. WORLD MAP
// =====================================

function updateWorldMap() {

  // =========================
  // NETWORK
  // =========================

  const network =
    progressData.network;

  const networkCleared = [

    network.stage1 >= 1,
    network.stage2 >= 1,
    network.stage3 >= 1,
    network.boss >= 1

  ].filter(Boolean).length;

  const networkPercent =
    networkCleared * 25;

  document
    .getElementById(
      "networkProgressText"
    )
    .textContent =
    networkPercent;

  document
    .getElementById(
      "networkProgressBar"
    )
    .style.width =
    networkPercent + "%";

  document
    .getElementById(
      "networkStatus"
    )
    .textContent =

    network.boss >= 1
      ? "🏆 AREA CLEAR!"
      : "⚔️ 冒険中";


  // =========================
  // SECURITY
  // =========================

  const security =
    progressData.security;

  const securityCleared = [

    security.stage1 >= 1,
    security.stage2 >= 1,
    security.stage3 >= 1,
    security.boss >= 1

  ].filter(Boolean).length;

  const securityPercent =
    securityCleared * 25;

  document
    .getElementById(
      "securityProgressText"
    )
    .textContent =
    securityPercent;

  document
    .getElementById(
      "securityProgressBar"
    )
    .style.width =
    securityPercent + "%";

  document
    .getElementById(
      "securityStatus"
    )
    .textContent =

    security.boss >= 1
      ? "🏆 AREA CLEAR!"
      : "⚔️ 冒険中";

  // =========================
// DATABASE
// =========================

const database =
  progressData.database;

const databaseCleared = [

  database.stage1 >= 1,
  database.stage2 >= 1,
  database.stage3 >= 1,
  database.boss >= 1

].filter(Boolean).length;

const databasePercent =
  databaseCleared * 25;

document
  .getElementById(
    "databaseProgressText"
  )
  .textContent =
  databasePercent;

document
  .getElementById(
    "databaseProgressBar"
  )
  .style.width =
  databasePercent + "%";

document
  .getElementById(
    "databaseStatus"
  )
  .textContent =

  database.boss >= 1
    ? "🏆 AREA CLEAR!"
    : "⚔️ 冒険中";

  // =========================
// ALGORITHM
// =========================

const algorithm =
  progressData.algorithm;

const algorithmCleared = [

  algorithm.stage1 >= 1,
  algorithm.stage2 >= 1,
  algorithm.stage3 >= 1,
  algorithm.boss >= 1

].filter(Boolean).length;

const algorithmPercent =
  algorithmCleared * 25;

document
  .getElementById(
    "algorithmProgressText"
  )
  .textContent =
  algorithmPercent;

document
  .getElementById(
    "algorithmProgressBar"
  )
  .style.width =
  algorithmPercent + "%";

document
  .getElementById(
    "algorithmStatus"
  )
  .textContent =

  algorithm.boss >= 1
    ? "🏆 AREA CLEAR!"
    : "⚔️ 冒険中";

// =========================
// MANAGEMENT
// =========================

const management =
  progressData.management;

const managementCleared = [

  management.stage1 >= 1,
  management.stage2 >= 1,
  management.stage3 >= 1,
  management.boss >= 1

].filter(Boolean).length;

const managementPercent =
  managementCleared * 25;

document
  .getElementById(
    "managementProgressText"
  )
  .textContent =
  managementPercent;

document
  .getElementById(
    "managementProgressBar"
  )
  .style.width =
  managementPercent + "%";

document
  .getElementById(
    "managementStatus"
  )
  .textContent =

  management.boss >= 1
    ? "🏆 AREA CLEAR!"
    : "⚔️ 冒険中";

  // =========================
// STRATEGY
// =========================

const strategy =
  progressData.strategy;

const strategyCleared = [

  strategy.stage1 >= 1,
  strategy.stage2 >= 1,
  strategy.stage3 >= 1,
  strategy.boss >= 1

].filter(Boolean).length;

const strategyPercent =
  strategyCleared * 25;

document
  .getElementById(
    "strategyProgressText"
  )
  .textContent =
  strategyPercent;

document
  .getElementById(
    "strategyProgressBar"
  )
  .style.width =
  strategyPercent + "%";

document
  .getElementById(
    "strategyStatus"
  )
  .textContent =

  strategy.boss >= 1
    ? "🏆 AREA CLEAR!"
    : "⚔️ 冒険中";

  // =========================
// FINAL TRIAL UNLOCK
// =========================

const allAreasCleared =

  progressData.network.boss >= 1 &&
  progressData.security.boss >= 1 &&
  progressData.database.boss >= 1 &&
  progressData.algorithm.boss >= 1 &&
  progressData.management.boss >= 1 &&
  progressData.strategy.boss >= 1;


if (allAreasCleared) {

  finalWorld.classList.remove(
    "locked"
  );

  finalStatus.textContent =
    "🔥 CHALLENGE!";

} else {

  finalWorld.classList.add(
    "locked"
  );

  finalStatus.textContent =
    "🔒 LOCKED";

}
  
}


// =====================================
// 18. ALL QUESTIONS
// =====================================

function getAllQuestions() {

  const all =
    [];


  Object.values(
    questionData
  ).forEach(
    function (area) {

      if (!area.stages) {
        return;
      }


      Object.values(
        area.stages
      ).forEach(
        function (stage) {

          if (
            stage.questions
          ) {

            all.push(
              ...stage.questions
            );

          }

        }
      );

    }
  );


  return all;

}

function getFinalTrialQuestions() {

  const allQuestions = [];

  const areaKeys = [
    "network",
    "security",
    "database",
    "algorithm",
    "management",
    "strategy"
  ];

  areaKeys.forEach(
    function (areaKey) {

      const area =
        questionData[areaKey];

      Object.values(
        area.stages
      ).forEach(
        function (stage) {

          allQuestions.push(
            ...stage.questions
          );

        }
      );

    }
  );

  return allQuestions;

}

function startFinalTrial() {

  const allQuestions =
    getFinalTrialQuestions();

  currentQuestions =
    [...allQuestions]
      .sort(
        () =>
          Math.random() - 0.5
      )
      .slice(
        0,
        20
      );

  currentQuestion = 0;
  correctCount = 0;

  isFinalTrial = true;

  hideAllScreens();

  stageText.textContent =
    "FINAL TRIAL";

  battleTitle.textContent =
    "⚔️ 最終試練";

  battleScreen
    .classList.remove(
      "hidden"
    );

  showQuestion();

}


// =====================================
// 19. FIND QUESTION
// =====================================

function findQuestionById(id) {

  return getAllQuestions()
    .find(
      function (q) {

        return q.id === id;

      }
    );

}


// =====================================
// 20. MONSTER SAVE
// =====================================

function saveMonsters() {

  localStorage.setItem(
    "apQuestMonsters",
    JSON.stringify(
      reviewMonsters
    )
  );


  updateMonsterCount();

}


function updateMonsterCount() {

  document
    .getElementById(
      "monsterCount"
    )
    .textContent =
    reviewMonsters.length;

}


// =====================================
// 21. CREATE MONSTER
// =====================================

function createMonster(
  questionId
) {

  const exists =
    reviewMonsters.some(
      function (monster) {

        return (
          monster.questionId ===
          questionId
        );

      }
    );


  if (exists) {
    return;
  }


  reviewMonsters.push({

    questionId:
      questionId,

    hp:
      3,

    createdAt:
      new Date()
        .toISOString()

  });


  saveMonsters();

}


// =====================================
// 22. HOME → MAP
// =====================================

mapButton.addEventListener(
  "click",
  function () {

    hideAllScreens();

    updateWorldMap();

    mapScreen
      .classList.remove(
        "hidden"
      );

  }
);


// =====================================
// 23. MAP → HOME
// =====================================

mapBackButton.addEventListener(
  "click",
  function () {

    hideAllScreens();

    homeScreen
      .classList.remove(
        "hidden"
      );

  }
);


// =====================================
// 24. MAP → NETWORK
// =====================================

networkWorld.addEventListener(
  "click",
  function () {

    currentArea =
      "network";


    hideAllScreens();


    updateStageDisplay();


    stageScreen
      .classList.remove(
        "hidden"
      );

  }
);

securityWorld.addEventListener(
  "click",
  function () {

    currentArea =
      "security";

    hideAllScreens();

    updateStageDisplay();

    stageScreen
      .classList.remove(
        "hidden"
      );

  }
);

// =====================================
// MAP → DATABASE
// =====================================

databaseWorld.addEventListener(
  "click",
  function () {

    currentArea =
      "database";

    hideAllScreens();

    updateStageDisplay();

    stageScreen
      .classList.remove(
        "hidden"
      );

  }
);

// =====================================
// MAP → ALGORITHM
// =====================================

algorithmWorld.addEventListener(
  "click",
  function () {

    currentArea =
      "algorithm";

    hideAllScreens();

    updateStageDisplay();

    stageScreen
      .classList.remove(
        "hidden"
      );

  }
);

// =====================================
// MAP → MANAGEMENT
// =====================================

managementWorld.addEventListener(
  "click",
  function () {

    currentArea =
      "management";

    hideAllScreens();

    updateStageDisplay();

    stageScreen
      .classList.remove(
        "hidden"
      );

  }
);

// =====================================
// MAP → STRATEGY
// =====================================

strategyWorld.addEventListener(
  "click",
  function () {

    currentArea =
      "strategy";

    hideAllScreens();

    updateStageDisplay();

    stageScreen
      .classList.remove(
        "hidden"
      );

  }
);

// =====================================
// MAP → FINAL TRIAL
// =====================================

finalWorld.addEventListener(
  "click",
  function () {

    if (
      finalWorld.classList.contains(
        "locked"
      )
    ) {
      return;
    }

    startFinalTrial();

  }
);


// =====================================
// 25. STAGE → MAP
// =====================================

stageBackButton.addEventListener(
  "click",
  function () {

    hideAllScreens();

    updateWorldMap();

    mapScreen
      .classList.remove(
        "hidden"
      );

  }
);


// =====================================
// 26. START STAGE
// =====================================

function startStage(
  stageKey
) {

  currentStage =
    stageKey;


  currentQuestion =
    0;


  correctCount =
    0;


  const area =
    getAreaData();


  if (
    stageKey ===
    "boss"
  ) {

    const allQuestions =
      Object.values(
        area.stages
      )
      .flatMap(
        function (stage) {

          return (
            stage.questions || []
          );

        }
      );


    currentQuestions =
      [...allQuestions]
        .sort(
          function () {

            return (
              Math.random() - 0.5
            );

          }
        )
        .slice(
          0,
          area.boss.questionCount
        );

  }

  else {

    currentQuestions =
      [
        ...area
          .stages[
            stageKey
          ]
          .questions
      ];

  }


  hideAllScreens();


  battleScreen
    .classList.remove(
      "hidden"
    );


  showQuestion();

}


// =====================================
// 27. STAGE BUTTONS
// =====================================

stage1Button.addEventListener(
  "click",
  function () {

    startStage(
      "stage1"
    );

  }
);


stage2Button.addEventListener(
  "click",
  function () {

    startStage(
      "stage2"
    );

  }
);


stage3Button.addEventListener(
  "click",
  function () {

    startStage(
      "stage3"
    );

  }
);


bossButton.addEventListener(
  "click",
  function () {

    startStage(
      "boss"
    );

  }
);


// =====================================
// 28. STAGE NAME
// =====================================

function getStageName() {

  const area =
    getAreaData();


  if (
    currentStage ===
    "boss"
  ) {

    return (
      "👹 " +
      area.boss.name
    );

  }


  return (
    area.icon +
    " " +
    area
      .stages[
        currentStage
      ]
      .name
  );

}


// =====================================
// 29. SHOW QUESTION
// =====================================

function showQuestion() {

  const q =
    currentQuestions[
      currentQuestion
    ];


  document
    .getElementById(
      "stageText"
    )
    .textContent =

    "QUEST " +

    (currentQuestion + 1) +

    " / " +

    currentQuestions.length;


  document
    .getElementById(
      "battleTitle"
    )
    .textContent =
    getStageName();


  document
    .getElementById(
      "questionText"
    )
    .textContent =
    q.question;


  document
    .getElementById(
      "result"
    )
    .innerHTML =
    "";


  nextButton
    .classList.add(
      "hidden"
    );


  const area =
    document.getElementById(
      "answerButtons"
    );


  area.innerHTML =
    "";


  q.answers.forEach(
    function (
      answer,
      index
    ) {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "answer";


      button.textContent =

        String.fromCharCode(
          65 + index
        ) +

        "　" +

        answer;


      button.addEventListener(
        "click",
        function () {

          checkAnswer(
            index,
            button
          );

        }
      );


      area.appendChild(
        button
      );

    }
  );

}


// =====================================
// 30. CHECK ANSWER
// =====================================

function checkAnswer(
  selected,
  selectedButton
) {

  const q =
    currentQuestions[
      currentQuestion
    ];


  const buttons =
    document.querySelectorAll(
      "#answerButtons .answer"
    );


  buttons.forEach(
    function (button) {

      button.disabled =
        true;

    }
  );


  const result =
    document.getElementById(
      "result"
    );


  recordStudyDay();


  if (
    selected ===
    q.correct
  ) {

    selectedButton
      .classList.add(
        "correct"
      );


    totalExp += 10;

    correctCount++;


    updatePlayer();


    result.innerHTML =

      "🎉 <strong>正解！</strong>" +

      "<br>⚔️ EXP +10" +

      "<br><br>" +

      q.explanation;

  }

  else {

    selectedButton
      .classList.add(
        "wrong"
      );


    buttons[
      q.correct
    ]
      .classList.add(
        "correct"
      );


    createMonster(
      q.id
    );


    result.innerHTML =

      "💥 <strong>不正解…</strong>" +

      "<br><br>正解：" +

      q.answers[
        q.correct
      ] +

      "<br><br>" +

      q.explanation +

      "<br><br>" +

      "💀 <strong>" +

      q.name +

      " が誕生した！</strong>";

  }


  nextButton
    .classList.remove(
      "hidden"
    );

}


// =====================================
// 31. NEXT QUESTION
// =====================================

nextButton.addEventListener(
  "click",
  function () {

    currentQuestion++;


    if (
      currentQuestion <
      currentQuestions.length
    ) {

      showQuestion();

    }

    else {

  if (isFinalTrial) {

    finalTrialClear();

  } else {

    questClear();

  }

}

  }
);


// =====================================
// 32. QUEST CLEAR
// =====================================

function questClear() {

  const rate =
    Math.round(

      correctCount /
      currentQuestions.length *
      100

    );


  const earnedStars =
    getStars(
      rate
    );


  const progress =
    getCurrentProgress();


  const oldStars =
    progress[
      currentStage
    ];


  if (
    earnedStars >
    oldStars
  ) {

    progress[
      currentStage
    ] =
      earnedStars;

  }


  saveProgress();


  let unlockText =
    "";


  if (
    oldStars === 0 &&
    earnedStars >= 1
  ) {

    if (
      currentStage ===
      "stage1"
    ) {

      unlockText =
        "🔓 STAGE 2が解放された！";

    }


    if (
      currentStage ===
      "stage2"
    ) {

      unlockText =
        "🔓 STAGE 3が解放された！";

    }


    if (
      currentStage ===
      "stage3"
    ) {

      unlockText =
        "👹 BOSSが出現した！";

    }


    if (
      currentStage ===
      "boss"
    ) {

      unlockText =
        "🏆 AREA CLEAR！" +
        getAreaData().name +
        "を制覇した！";

    }

  }


  updateStageDisplay();


  hideAllScreens();


  clearScreen
    .classList.remove(
      "hidden"
    );


  document
    .getElementById(
      "clearTitle"
    )
    .textContent =

    earnedStars >= 1
      ? "🏆 QUEST CLEAR!"
      : "⚔️ QUEST COMPLETE";


  document
    .getElementById(
      "clearStageName"
    )
    .textContent =
    getStageName();


  document
    .getElementById(
      "clearStars"
    )
    .textContent =
    starsText(
      earnedStars
    );


  document
    .getElementById(
      "clearScore"
    )
    .textContent =

    currentQuestions.length +

    "問中 " +

    correctCount +

    "問正解";


  document
    .getElementById(
      "clearRate"
    )
    .textContent =

    "正答率 " +

    rate +

    "%";


  document
    .getElementById(
      "clearExp"
    )
    .textContent =

    "獲得EXP +" +

    (correctCount * 10);


  document
    .getElementById(
      "bestScore"
    )
    .textContent =

    "BEST " +

    starsText(
      progress[
        currentStage
      ]
    );


  document
    .getElementById(
      "unlockMessage"
    )
    .textContent =
    unlockText;

}

// =====================================
// FINAL TRIAL CLEAR
// =====================================

function finalTrialClear() {

  const rate =
    Math.round(
      correctCount /
      currentQuestions.length *
      100
    );

  const earnedStars =
    getStars(rate);

  if (
  earnedStars >
  finalTrialBest
) {

  finalTrialBest =
    earnedStars;

  localStorage.setItem(
    "apQuestFinalTrial",
    finalTrialBest
  );

}

  hideAllScreens();

  clearScreen
    .classList.remove(
      "hidden"
    );

  document
    .getElementById(
      "clearTitle"
    )
    .textContent =
    earnedStars >= 1
      ? "👑 FINAL TRIAL CLEAR!"
      : "⚔️ FINAL TRIAL COMPLETE";

  document
    .getElementById(
      "clearStageName"
    )
    .textContent =
    "⚔️ 最終試練";

  document
    .getElementById(
      "clearStars"
    )
    .textContent =
    starsText(
      earnedStars
    );

  document
    .getElementById(
      "clearScore"
    )
    .textContent =
    currentQuestions.length +
    "問中 " +
    correctCount +
    "問正解";

  document
    .getElementById(
      "clearRate"
    )
    .textContent =
    "正答率 " +
    rate +
    "%";

  document
    .getElementById(
      "clearExp"
    )
    .textContent =
    "獲得EXP +" +
    (correctCount * 10);

  document
    .getElementById(
      "bestScore"
    )
    .textContent =
    earnedStars >= 1
      ? "🏆 応用情報の勇者"
      : "再挑戦して★を獲得しよう！";

  document
    .getElementById(
      "unlockMessage"
    )
    .textContent =
    earnedStars >= 1
      ? "全ての試練を乗り越えた！"
      : "最終試練はまだ終わらない…";

  isFinalTrial = false;

}


// =====================================
// 33. CLEAR BUTTONS
// =====================================

clearStageButton.addEventListener(
  "click",
  function () {

    hideAllScreens();

    updateStageDisplay();

    stageScreen
      .classList.remove(
        "hidden"
      );

  }
);


clearHomeButton.addEventListener(
  "click",
  function () {

    hideAllScreens();

    homeScreen
      .classList.remove(
        "hidden"
      );

  }
);


// =====================================
// 34. DUNGEON START
// =====================================

dungeonButton.addEventListener(
  "click",
  function () {

    if (
      reviewMonsters.length ===
      0
    ) {

      alert(
        "復習モンスターはまだいません！"
      );

      return;

    }


    currentMonsterIndex =
      0;


    hideAllScreens();


    dungeonScreen
      .classList.remove(
        "hidden"
      );


    showMonster();

  }
);


// =====================================
// 35. SHOW MONSTER
// =====================================

function showMonster() {

  if (
    reviewMonsters.length ===
    0
  ) {

    hideAllScreens();


    homeScreen
      .classList.remove(
        "hidden"
      );


    updateMonsterCount();


    alert(
      "✨ DUNGEON CLEAR!\n復習モンスターをすべて討伐しました！"
    );


    return;

  }


  if (
    currentMonsterIndex >=
    reviewMonsters.length
  ) {

    currentMonsterIndex =
      0;

  }


  const monster =
    reviewMonsters[
      currentMonsterIndex
    ];


  const q =
    findQuestionById(
      monster.questionId
    );


  if (!q) {

    reviewMonsters.splice(
      currentMonsterIndex,
      1
    );


    saveMonsters();


    showMonster();


    return;

  }


  document
    .getElementById(
      "monsterNumber"
    )
    .textContent =

    "MONSTER " +

    (currentMonsterIndex + 1) +

    " / " +

    reviewMonsters.length;


  document
    .getElementById(
      "monsterName"
    )
    .textContent =
    q.name;


  document
    .getElementById(
      "monsterHp"
    )
    .textContent =

    "HP " +

    "❤️".repeat(
      monster.hp
    ) +

    "🤍".repeat(
      3 - monster.hp
    ) +

    "　" +

    monster.hp +

    " / 3";


  document
    .getElementById(
      "reviewQuestion"
    )
    .textContent =
    q.question;


  document
    .getElementById(
      "reviewResult"
    )
    .innerHTML =
    "";


  nextMonsterButton
    .classList.add(
      "hidden"
    );


  const area =
    document.getElementById(
      "reviewAnswers"
    );


  area.innerHTML =
    "";


  q.answers.forEach(
    function (
      answer,
      index
    ) {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "answer";


      button.textContent =

        String.fromCharCode(
          65 + index
        ) +

        "　" +

        answer;


      button.addEventListener(
        "click",
        function () {

          attackMonster(
            index,
            button
          );

        }
      );


      area.appendChild(
        button
      );

    }
  );

}


// =====================================
// 36. ATTACK MONSTER
// =====================================

function attackMonster(
  selected,
  selectedButton
) {

  const monster =
    reviewMonsters[
      currentMonsterIndex
    ];


  const q =
    findQuestionById(
      monster.questionId
    );


  const buttons =
    document.querySelectorAll(
      "#reviewAnswers .answer"
    );


  buttons.forEach(
    function (button) {

      button.disabled =
        true;

    }
  );


  const result =
    document.getElementById(
      "reviewResult"
    );


  recordStudyDay();


  if (
    selected ===
    q.correct
  ) {

    selectedButton
      .classList.add(
        "correct"
      );


    monster.hp--;


    if (
      monster.hp <= 0
    ) {

      totalExp += 30;


      result.innerHTML =

        "✨ <strong>MONSTER DEFEATED!</strong>" +

        "<br><br>" +

        q.name +

        "を討伐！" +

        "<br>🏆「" +

        q.answers[
          q.correct
        ] +

        "」を習得" +

        "<br><br>" +

        "BONUS EXP +30";


      reviewMonsters.splice(
        currentMonsterIndex,
        1
      );


      saveMonsters();


      updatePlayer();

    }

    else {

      result.innerHTML =

        "⚡ <strong>WEAKNESS HIT!</strong>" +

        "<br><br>" +

        q.name +

        "に1ダメージ！" +

        "<br>残りHP：" +

        monster.hp +

        " / 3";


      saveMonsters();

    }

  }

  else {

    selectedButton
      .classList.add(
        "wrong"
      );


    buttons[
      q.correct
    ]
      .classList.add(
        "correct"
      );


    result.innerHTML =

      "💥 攻撃失敗…" +

      "<br><br>正解：" +

      q.answers[
        q.correct
      ] +

      "<br><br>" +

      q.explanation +

      "<br><br>" +

      "モンスターのHPは減らなかった！";

  }


  nextMonsterButton
    .classList.remove(
      "hidden"
    );

}


// =====================================
// 37. NEXT MONSTER
// =====================================

nextMonsterButton.addEventListener(
  "click",
  function () {

    if (
      reviewMonsters.length ===
      0
    ) {

      showMonster();

      return;

    }


    currentMonsterIndex++;


    if (
      currentMonsterIndex >=
      reviewMonsters.length
    ) {

      currentMonsterIndex =
        0;

    }


    showMonster();

  }
);


// =====================================
// 38. DUNGEON → HOME
// =====================================

backHomeButton.addEventListener(
  "click",
  function () {

    hideAllScreens();


    homeScreen
      .classList.remove(
        "hidden"
      );


    updatePlayer(
      false
    );


    updateMonsterCount();


    updateStreak();

  }
);


// =====================================
// 39. START
// =====================================

calculateLevel();


updatePlayer(
  false
);


updateMonsterCount();


updateStreak();


updateWorldMap();
