/* ============================================
   Level 6: CRO業界の全体像
   ============================================ */

const LEVEL6_DATA = {
    id: 6,
    title: "CRO業界の全体像",
    icon: "🌐",
    description: "IQVIA、Covance/LabCorp、ICON、Parexelとの比較",
    modules: [
        {
            id: 601,
            title: "CRO業界におけるPPDの位置づけ",
            duration: "15分",
            content: `
                <h2>CRO業界の全体像とPPDのポジション</h2>

                <p>CRO（Contract Research Organization）業界は、製薬企業のアウトソーシング需要の拡大を背景に、年率8〜10%で成長を続ける巨大市場です。グローバルCRO市場の規模は<strong>約800〜900億ドル</strong>（2024年時点）と推定されており、今後も安定した成長が見込まれています。PPDはThermo Fisher傘下のCROとして、業界トップクラスの地位を確立しています。</p>

                <h3>主要CROの比較</h3>
                <table>
                    <thead><tr><th>企業名</th><th>親会社/形態</th><th>売上規模</th><th>特徴</th></tr></thead>
                    <tbody>
                        <tr><td>IQVIA</td><td>独立上場企業</td><td>約150億ドル</td><td>CRO+データ/テクノロジー。旧IMS HealthとQuintilesの合併</td></tr>
                        <tr><td>PPD</td><td>Thermo Fisher傘下</td><td>約60〜70億ドル</td><td>ラボサービス統合型CRO。Thermo Fisherの技術基盤</td></tr>
                        <tr><td>Covance (LabCorp Drug Development)</td><td>LabCorp傘下</td><td>約55〜60億ドル</td><td>非臨床〜臨床の一貫サービス。検査企業との統合</td></tr>
                        <tr><td>ICON plc</td><td>独立上場企業</td><td>約80億ドル</td><td>2021年にPRAを買収。デジタル化に強み</td></tr>
                        <tr><td>Parexel</td><td>EQT Partners傘下</td><td>約30億ドル</td><td>薬事コンサルティングに強み。2017年にLBO</td></tr>
                        <tr><td>Syneos Health</td><td>Elliott傘下</td><td>約55億ドル</td><td>CRO+コマーシャル（CSO）の融合モデル</td></tr>
                        <tr><td>Charles River Laboratories</td><td>独立上場企業</td><td>約40億ドル</td><td>非臨床（前臨床）に特化した強み</td></tr>
                    </tbody>
                </table>

                <h3>PPDの競争優位性</h3>
                <p>PPDは以下の点で競合他社と差別化されています。</p>
                <ul>
                    <li><strong>Thermo Fisherのエコシステム</strong>：世界最大のライフサイエンス企業の技術基盤・顧客ネットワーク・物流インフラを活用</li>
                    <li><strong>ラボサービスとの統合</strong>：臨床開発とラボを一社で提供できるワンストップ体制</li>
                    <li><strong>財務的安定性</strong>：Thermo Fisherの強固な財務基盤に裏付けされた投資能力</li>
                    <li><strong>テクノロジー投資</strong>：AI・デジタルツールへの積極的な投資</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">CRO業界の統合トレンド</div>
                    <p>近年、CRO業界では大型のM&A（合併・買収）が相次いでいます。IQVIAの誕生（2016年、IMS HealthとQuintilesの合併）、ICONによるPRA Health Sciencesの買収（2021年）、Thermo FisherによるPPDの買収（2021年）、そしてSyneos Healthの非上場化（2023年）など、業界再編の動きが加速しています。規模の経済とサービスの多様化が競争力の源泉となっています。</p>
                </div>

                <h3>IQVIAとの違い</h3>
                <p>業界最大手のIQVIAは、CROサービスに加えて医療データ・アナリティクス事業を持つ点でユニークです。旧IMS Healthから引き継いだ医療情報データベースは世界最大規模であり、リアルワールドデータ（RWD）を活用した臨床試験設計や市場分析に強みがあります。一方PPDは、Thermo Fisherの機器・試薬・ラボ基盤との統合によるサイエンス面での差別化を図っています。</p>

                <h3>CRO市場の成長ドライバー</h3>
                <ul>
                    <li><strong>製薬企業のアウトソーシング率の上昇</strong>：開発コスト削減と柔軟性確保のため外部委託が拡大</li>
                    <li><strong>バイオ医薬品の台頭</strong>：複雑な生物学的製剤の開発ニーズがCROへの需要を押し上げ</li>
                    <li><strong>新興国での治験拡大</strong>：アジア・中南米での臨床試験実施が増加</li>
                    <li><strong>規制の複雑化</strong>：各国の規制要件の高度化により専門知識への需要が増大</li>
                </ul>
            `,
            quiz: [
                { id: "q601_1", type: "choice", question: "CRO業界で売上規模が最大の企業はどれですか？", options: ["PPD", "IQVIA", "Parexel", "Charles River Laboratories"], answer: 1, explanation: "IQVIAは約150億ドルの売上規模を持ち、CRO業界で最大手です。CROサービスに加えて医療データ・アナリティクス事業も展開しています。" },
                { id: "q601_2", type: "choice", question: "PPDの競争優位性として正しくないものはどれですか？", options: ["Thermo Fisherのエコシステムの活用", "ラボサービスとの統合", "世界最大の医療情報データベースの保有", "財務的安定性"], answer: 2, explanation: "世界最大の医療情報データベースを持つのはIQVIA（旧IMS Health）です。PPDの強みはThermo Fisherの技術基盤とラボサービスの統合にあります。" },
                { id: "q601_3", type: "choice", question: "2021年にPRA Health Sciencesを買収したCROはどれですか？", options: ["IQVIA", "PPD", "ICON", "Parexel"], answer: 2, explanation: "ICON plcは2021年にPRA Health Sciencesを買収し、業界大手の地位を強化しました。" }
            ]
        }
    ]
};
