/* ============================================
   Level 12: キャリア・就活情報
   ============================================ */

const LEVEL12_DATA = {
    id: 12,
    title: "キャリア・就活情報",
    icon: "💼",
    description: "CRA、PM、統計、データマネジメント、年収、外資CROの働き方",
    modules: [
        {
            id: 1201,
            title: "PPDでのキャリアと就活情報",
            duration: "15分",
            content: `
                <h2>PPDでのキャリア ― 外資CROで働くということ</h2>

                <p>PPD（現Thermo Fisher Scientific傘下）は、臨床開発のプロフェッショナルにとって魅力的なキャリアの場を提供しています。グローバルCROならではの国際的な環境、最先端のプロジェクト、充実した研修制度が特徴です。ここでは、PPDの主要職種、年収水準、外資CROの働き方について詳しく解説します。</p>

                <h3>主要職種と役割</h3>
                <table>
                    <thead><tr><th>職種</th><th>主な業務内容</th><th>求められるスキル</th></tr></thead>
                    <tbody>
                        <tr><td>CRA（臨床開発モニター）</td><td>治験施設の訪問、プロトコル遵守確認、SDV、安全性報告</td><td>医薬系学位、コミュニケーション力、英語力、出張対応力</td></tr>
                        <tr><td>PM（プロジェクトマネージャー）</td><td>臨床試験全体の進行管理、予算管理、クライアント対応</td><td>CRA経験、リーダーシップ、PMP等の資格、交渉力</td></tr>
                        <tr><td>統計解析担当（Biostatistician）</td><td>SAP作成、統計解析、CDISC標準対応、規制当局との統計議論</td><td>統計学修士以上、SASプログラミング、臨床統計の知識</td></tr>
                        <tr><td>SASプログラマー</td><td>SDTM/ADaMデータセット構築、TLF作成、バリデーション</td><td>SAS Base/Advanced、CDISC標準、正確性と効率性</td></tr>
                        <tr><td>DM（データマネージャー）</td><td>CRF設計、データベース構築、コーディング、データクリーニング</td><td>EDCシステム経験、MedDRA/WHODrug、品質管理スキル</td></tr>
                        <tr><td>MW（メディカルライター）</td><td>プロトコル、CSR、CTD申請資料、IB等の作成</td><td>医薬系学位、英語ライティング力、ICHガイドライン知識</td></tr>
                        <tr><td>RA（レギュラトリーアフェアーズ）</td><td>各国規制当局への申請戦略立案、提出資料準備</td><td>薬事規制の専門知識、各国の規制動向の把握</td></tr>
                    </tbody>
                </table>

                <h3>年収水準（日本法人の目安）</h3>
                <p>外資CROの年収は、日本の内資CROと比較して一般的に高い水準にあります。以下は日本でのおおよその年収レンジです。</p>
                <table>
                    <thead><tr><th>職種・レベル</th><th>年収レンジ（目安）</th></tr></thead>
                    <tbody>
                        <tr><td>CRA（ジュニア・1〜3年目）</td><td>450万〜600万円</td></tr>
                        <tr><td>CRA（シニア・4〜7年目）</td><td>600万〜850万円</td></tr>
                        <tr><td>リードCRA / CTL</td><td>750万〜1,000万円</td></tr>
                        <tr><td>プロジェクトマネージャー</td><td>800万〜1,200万円</td></tr>
                        <tr><td>統計解析担当</td><td>600万〜1,100万円</td></tr>
                        <tr><td>SASプログラマー</td><td>500万〜900万円</td></tr>
                        <tr><td>データマネージャー</td><td>450万〜800万円</td></tr>
                        <tr><td>メディカルライター</td><td>550万〜950万円</td></tr>
                        <tr><td>ディレクター以上</td><td>1,200万〜2,000万円以上</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">外資CROの報酬体系</div>
                    <p>外資CROでは基本給に加え、年次ボーナス（業績連動型、基本給の10〜20%程度）、RSU（制限付き株式ユニット）/ストックオプション（マネージャー以上）、福利厚生パッケージ（医療保険、退職金制度等）が含まれることが一般的です。Thermo Fisher傘下となったPPDでは、TMOの株式報酬プログラムが適用される可能性があります。</p>
                </div>

                <h3>外資CROの働き方の特徴</h3>
                <ul>
                    <li><strong>英語の使用頻度</strong>：社内コミュニケーション、グローバルミーティング、ドキュメント作成で日常的に英語を使用</li>
                    <li><strong>フレキシブルワーク</strong>：リモートワーク/ハイブリッドワークが一般的。CRAは在宅+出張のスタイル</li>
                    <li><strong>フラットな組織文化</strong>：上下関係が比較的緩やかで、意見を言いやすい環境</li>
                    <li><strong>グローバルプロジェクト</strong>：海外チームとの協働が多く、国際的な視野が広がる</li>
                    <li><strong>出張の多さ</strong>：特にCRAは週2〜3日の出張が一般的（リモートモニタリングの普及で変化中）</li>
                    <li><strong>成果主義</strong>：年功序列ではなく、パフォーマンスに基づく評価と昇進</li>
                    <li><strong>研修制度</strong>：入社時の集中研修、OJT、e-learning、グローバルトレーニングプログラムが充実</li>
                </ul>

                <h3>就活・転職のポイント</h3>
                <ul>
                    <li><strong>求められる学歴</strong>：理系学位（薬学、医学、看護学、生命科学等）が基本。統計職は統計学修士が望ましい</li>
                    <li><strong>英語力</strong>：TOEIC 730点以上が目安。実務では英語でのメール・会議・文書作成が必要</li>
                    <li><strong>未経験からのエントリー</strong>：CRAは未経験（MR経験や看護師経験など）からの転職も多い。社内研修が充実</li>
                    <li><strong>転職エージェント</strong>：外資CROへの転職にはJAC Recruitment、エンワールドなどの外資系専門エージェントが有効</li>
                    <li><strong>面接のポイント</strong>：なぜCROか、なぜPPDか、英語でのプレゼンテーション能力、問題解決能力のアピール</li>
                </ul>

                <h3>キャリアパスの例</h3>
                <p>PPDでの典型的なキャリアパスをいくつか紹介します。</p>
                <ul>
                    <li><strong>CRAパス</strong>：CRA I → CRA II → Senior CRA → Lead CRA / CTL → CRM（Clinical Research Manager）→ Director</li>
                    <li><strong>PMパス</strong>：Associate PM → PM → Senior PM → Program Director → VP of Operations</li>
                    <li><strong>統計パス</strong>：Biostatistician I → Senior Biostatistician → Principal Biostatistician → Director of Biostatistics</li>
                    <li><strong>横断的キャリア</strong>：CRA → DM → PM や、SASプログラマー → 統計解析 など職種間の移動も可能</li>
                </ul>
            `,
            quiz: [
                { id: "q1201_1", type: "choice", question: "PPDのCRA（臨床開発モニター）のシニアレベル（4〜7年目）の年収レンジとして最も適切なものはどれですか？", options: ["300万〜450万円", "450万〜600万円", "600万〜850万円", "1,200万〜2,000万円"], answer: 2, explanation: "外資CROのシニアCRA（4〜7年目）の年収レンジは約600万〜850万円が目安です。" },
                { id: "q1201_2", type: "choice", question: "外資CROの働き方の特徴として正しくないものはどれですか？", options: ["英語を日常的に使用する", "年功序列に基づく昇進", "リモートワーク/ハイブリッドワークが一般的", "グローバルプロジェクトでの協働"], answer: 1, explanation: "外資CROでは年功序列ではなく、パフォーマンスに基づく成果主義の評価・昇進が一般的です。" },
                { id: "q1201_3", type: "choice", question: "PPDの統計解析担当（Biostatistician）に求められる学歴は何ですか？", options: ["高卒以上", "理系学士以上", "統計学修士以上が望ましい", "博士号が必須"], answer: 2, explanation: "統計解析担当には統計学の修士号以上が望ましいとされています。SASプログラミングと臨床統計の知識も求められます。" }
            ]
        }
    ]
};
