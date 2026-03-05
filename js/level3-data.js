/* ============================================
   Level 3: 事業構成
   ============================================ */

const LEVEL3_DATA = {
    id: 3,
    title: "事業構成",
    icon: "📋",
    description: "Clinical Development ServicesとLab Servicesの2本柱",
    modules: [
        {
            id: 301,
            title: "PPDの事業構成",
            duration: "15分",
            content: `
                <h2>PPDの2大事業セグメント</h2>

                <p>PPDの事業は大きく<strong>Clinical Development Services（臨床開発サービス）</strong>と<strong>Laboratory Services（ラボサービス）</strong>の2本柱で構成されています。この2つの事業が相互に連携することで、医薬品開発の包括的なサポートを提供しています。</p>

                <h3>1. Clinical Development Services（臨床開発サービス）</h3>
                <p>PPDの中核事業であり、売上の約<strong>70〜75%</strong>を占めます。製薬企業やバイオテクノロジー企業の臨床試験を計画段階から実施、データ管理、規制当局への申請サポートまで一貫して支援します。主なサービス領域は以下の通りです。</p>
                <ul>
                    <li><strong>プロジェクトマネジメント</strong>：臨床試験全体の進行管理と品質管理</li>
                    <li><strong>臨床モニタリング</strong>：CRA（臨床開発モニター）による施設管理とデータ品質確保</li>
                    <li><strong>データマネジメント</strong>：症例報告書（CRF）の設計、データ収集・クリーニング</li>
                    <li><strong>統計解析</strong>：臨床試験データの統計解析と報告書作成</li>
                    <li><strong>メディカルライティング</strong>：CSR（治験総括報告書）や申請資料の作成</li>
                    <li><strong>薬事コンサルティング</strong>：FDA、EMA、PMDAなど各国規制当局との折衝支援</li>
                    <li><strong>患者リクルートメント</strong>：治験参加者の効率的な募集・維持</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">PPDの臨床開発実績</div>
                    <p>PPDはこれまでに<strong>数万件以上</strong>の臨床試験を支援しており、FDA承認取得をサポートした新薬は数百品目に及びます。オンコロジー、免疫領域、中枢神経系、感染症など幅広い治療領域での豊富な経験を持っています。</p>
                </div>

                <h3>2. Laboratory Services（ラボサービス）</h3>
                <p>PPDのラボサービスは売上の約<strong>25〜30%</strong>を占め、臨床試験に不可欠な検査・分析サービスを提供しています。主なサービスラインは以下の通りです。</p>
                <ul>
                    <li><strong>中央検査サービス</strong>：世界中の治験実施施設からの検体を一元管理し、標準化された高品質な検査結果を提供</li>
                    <li><strong>バイオアナリティクスサービス</strong>：PK（薬物動態）分析、バイオマーカー測定、免疫原性試験</li>
                    <li><strong>ワクチンサービス</strong>：ワクチン開発に特化した検査サービス（血清学的検査、細胞性免疫応答評価）</li>
                    <li><strong>GMP検査</strong>：製造工程における品質管理のための検査サービス</li>
                </ul>

                <h3>2つのセグメントのシナジー</h3>
                <p>PPDの強みは、臨床開発とラボサービスを一社で提供できることにあります。このワンストップ体制により、以下のメリットが生まれます。</p>
                <table>
                    <thead><tr><th>メリット</th><th>詳細</th></tr></thead>
                    <tbody>
                        <tr><td>データの一貫性</td><td>臨床データとラボデータの統合管理により品質向上</td></tr>
                        <tr><td>効率性の向上</td><td>複数ベンダー間の調整が不要、コミュニケーションコスト削減</td></tr>
                        <tr><td>タイムラインの短縮</td><td>シームレスな連携により試験期間を短縮</td></tr>
                        <tr><td>コスト最適化</td><td>バンドル契約による総コストの削減</td></tr>
                    </tbody>
                </table>

                <h3>Thermo Fisher傘下での事業再編</h3>
                <p>Thermo Fisher Scientific傘下に入った後、PPDの事業はThermo Fisherの既存のラボ製品・サービスとの統合が進んでいます。特にラボサービス部門では、Thermo Fisherの分析機器や試薬との連携により、より高度な分析サービスの提供が可能になっています。臨床開発サービス部門も、Thermo Fisherのグローバルネットワークを活用して、さらなる地域展開を進めています。</p>
            `,
            quiz: [
                { id: "q301_1", type: "choice", question: "PPDの2大事業セグメントの組み合わせとして正しいものはどれですか？", options: ["製薬事業とバイオ事業", "臨床開発サービスとラボサービス", "コンサルティングとIT事業", "創薬事業と販売事業"], answer: 1, explanation: "PPDの事業はClinical Development Services（臨床開発サービス）とLaboratory Services（ラボサービス）の2本柱で構成されています。" },
                { id: "q301_2", type: "choice", question: "PPDの売上に占める臨床開発サービスの割合はおよそどのくらいですか？", options: ["約30〜40%", "約50〜60%", "約70〜75%", "約90%以上"], answer: 2, explanation: "臨床開発サービスはPPDの中核事業であり、売上の約70〜75%を占めています。" },
                { id: "q301_3", type: "choice", question: "PPDのラボサービスに含まれないものはどれですか？", options: ["中央検査サービス", "バイオアナリティクスサービス", "ワクチンサービス", "医薬品の製造販売"], answer: 3, explanation: "PPDのラボサービスには中央検査、バイオアナリティクス、ワクチンサービスなどが含まれますが、医薬品の製造販売は行っていません。" }
            ]
        }
    ]
};
