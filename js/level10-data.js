/* ============================================
   Level 10: 品質管理と規制対応
   ============================================ */

const LEVEL10_DATA = {
    id: 10,
    title: "品質管理と規制対応",
    icon: "✅",
    description: "ICH-GCP、FDA/EMA/PMDA対応、監査体制の詳細",
    modules: [
        {
            id: 1001,
            title: "PPDの品質管理と規制対応",
            duration: "15分",
            content: `
                <h2>PPDの品質管理と規制対応 ― グローバルスタンダードの追求</h2>

                <p>CROとして臨床試験を受託するPPDにとって、品質管理（Quality Management）と規制対応（Regulatory Compliance）は事業の根幹です。臨床試験のデータは新薬承認の判断根拠となるため、その信頼性と整合性を確保することは患者の安全性と公衆衛生に直結します。PPDは国際的な品質基準に準拠した堅牢な品質マネジメントシステム（QMS）を構築し、世界各国の規制要件に対応しています。</p>

                <h3>ICH-GCPへの準拠</h3>
                <p><strong>ICH E6(R2) GCP（Good Clinical Practice）ガイドライン</strong>は、臨床試験の計画、実施、記録、報告に関する国際的な品質基準です。PPDのすべての臨床試験オペレーションはこのガイドラインに厳格に準拠しています。</p>
                <ul>
                    <li><strong>被験者の権利・安全・福祉の保護</strong>：インフォームドコンセントの適切な取得と管理</li>
                    <li><strong>データの信頼性</strong>：正確で完全、検証可能なデータの収集と管理</li>
                    <li><strong>プロトコル遵守</strong>：承認されたプロトコルに従った試験の実施</li>
                    <li><strong>リスクベースドアプローチ</strong>：ICH E6(R2)で導入されたリスクベースの品質管理</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">ICH E6(R2)のリスクベースドアプローチ</div>
                    <p>2016年に改訂されたICH E6(R2)では、従来の画一的な品質管理から、リスクの特定・評価・軽減に基づくアプローチへの転換が推奨されました。これにより、重要なプロセスやデータに資源を集中させ、効率的かつ効果的な品質管理が可能になります。PPDはこの考え方をオペレーション全体に浸透させています。</p>
                </div>

                <h3>各国規制当局への対応</h3>
                <table>
                    <thead><tr><th>規制当局</th><th>地域</th><th>PPDの対応</th></tr></thead>
                    <tbody>
                        <tr><td>FDA（米国食品医薬品局）</td><td>米国</td><td>IND申請、NDA/BLA申請支援、FDA Advisory Committee対応</td></tr>
                        <tr><td>EMA（欧州医薬品庁）</td><td>EU</td><td>CTA申請、MAA申請支援、各国NCA対応</td></tr>
                        <tr><td>PMDA（医薬品医療機器総合機構）</td><td>日本</td><td>治験届提出、承認申請支援、PMDA相談対応</td></tr>
                        <tr><td>NMPA（国家薬品監督管理局）</td><td>中国</td><td>IND/NDA申請、中国特有の規制要件対応</td></tr>
                        <tr><td>Health Canada</td><td>カナダ</td><td>CTA申請、NDS申請支援</td></tr>
                    </tbody>
                </table>

                <h3>PPDの品質マネジメントシステム（QMS）</h3>
                <p>PPDのQMSは以下の要素で構成されています。</p>
                <ul>
                    <li><strong>SOP（標準業務手順書）体系</strong>：グローバル共通のSOPと各国固有の補足手順で構成される包括的な文書体系</li>
                    <li><strong>トレーニングシステム</strong>：全従業員のGCP教育と役割別の専門トレーニング。コンプライアンス率を継続的にモニタリング</li>
                    <li><strong>CAPA（是正措置・予防措置）</strong>：品質逸脱の根本原因分析と再発防止策の実施</li>
                    <li><strong>KQI（Key Quality Indicators）</strong>：品質指標のダッシュボード管理とトレンド分析</li>
                    <li><strong>ベンダー管理</strong>：サブコントラクターやベンダーの品質監査と継続的な評価</li>
                </ul>

                <h3>監査体制</h3>
                <p>PPDは社内の独立した品質保証（QA）部門を設置し、以下の監査活動を実施しています。</p>
                <ul>
                    <li><strong>内部監査</strong>：PPDの各部門・拠点に対する定期的な内部監査</li>
                    <li><strong>プロジェクト監査</strong>：個別の臨床試験プロジェクトに対する品質監査</li>
                    <li><strong>施設監査</strong>：治験実施施設（サイト）に対する監査</li>
                    <li><strong>ベンダー監査</strong>：外部委託先の品質基準遵守状況の確認</li>
                    <li><strong>規制当局査察対応</strong>：FDA、EMA、PMDAなどの査察（インスペクション）への対応支援</li>
                </ul>

                <h3>データインテグリティ</h3>
                <p>PPDはデータインテグリティ（ALCOA+原則）を全てのデータ関連プロセスの基盤としています。ALCOA+とは、Attributable（帰属可能）、Legible（判読可能）、Contemporaneous（同時的）、Original（原本性）、Accurate（正確）に加え、Complete（完全）、Consistent（一貫性）、Enduring（永続性）、Available（利用可能）の頭文字をとった品質原則です。</p>
            `,
            quiz: [
                { id: "q1001_1", type: "choice", question: "ICH E6(R2)で導入された品質管理のアプローチは何ですか？", options: ["全数検査アプローチ", "リスクベースドアプローチ", "コスト最優先アプローチ", "スピード重視アプローチ"], answer: 1, explanation: "ICH E6(R2)では、リスクの特定・評価・軽減に基づくリスクベースドアプローチが推奨されており、PPDはこの考え方をオペレーション全体に浸透させています。" },
                { id: "q1001_2", type: "choice", question: "データインテグリティの基本原則「ALCOA+」のALCOAに含まれないものはどれですか？", options: ["Attributable（帰属可能）", "Legible（判読可能）", "Automated（自動化）", "Accurate（正確）"], answer: 2, explanation: "ALCOAはAttributable（帰属可能）、Legible（判読可能）、Contemporaneous（同時的）、Original（原本性）、Accurate（正確）の頭文字です。Automated（自動化）は含まれません。" },
                { id: "q1001_3", type: "choice", question: "PPDのQMS（品質マネジメントシステム）に含まれる要素はどれですか？", options: ["新薬の化学合成手順", "SOP体系、トレーニング、CAPA", "マーケティング戦略", "株主総会の運営手順"], answer: 1, explanation: "PPDのQMSにはSOP体系、トレーニングシステム、CAPA（是正措置・予防措置）、KQI、ベンダー管理などの要素が含まれています。" }
            ]
        }
    ]
};
