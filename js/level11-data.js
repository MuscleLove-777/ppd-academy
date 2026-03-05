/* ============================================
   Level 11: SWOT分析
   ============================================ */

const LEVEL11_DATA = {
    id: 11,
    title: "SWOT分析",
    icon: "📈",
    description: "Thermo Fisherのバックボーン、CRO競争激化、人材確保の課題",
    modules: [
        {
            id: 1101,
            title: "PPDのSWOT分析",
            duration: "15分",
            content: `
                <h2>PPDのSWOT分析 ― 強み・弱み・機会・脅威</h2>

                <p>PPDの戦略的ポジションを理解するために、SWOT分析のフレームワークを用いて、同社の強み（Strengths）、弱み（Weaknesses）、機会（Opportunities）、脅威（Threats）を体系的に分析します。Thermo Fisher Scientific傘下となったことで、PPDの戦略的環境は大きく変化しています。</p>

                <h3>Strengths（強み）</h3>
                <table>
                    <thead><tr><th>強み</th><th>詳細</th></tr></thead>
                    <tbody>
                        <tr><td>Thermo Fisherのバックボーン</td><td>売上約400億ドルの世界最大級ライフサイエンス企業の財務基盤、ブランド力、グローバルインフラを活用可能</td></tr>
                        <tr><td>ラボサービスとの統合</td><td>臨床開発とラボを一社で提供するワンストップ体制。検体物流の効率化と品質の一貫性</td></tr>
                        <tr><td>グローバルプレゼンス</td><td>46カ国以上の拠点と30,000人超の従業員。多様な規制環境への対応力</td></tr>
                        <tr><td>豊富な実績</td><td>1985年設立以来の長い歴史と数万件の臨床試験支援実績</td></tr>
                        <tr><td>テクノロジー投資</td><td>AI、DCT、RWDなど先端技術への積極的な投資とThermo Fisherの技術基盤</td></tr>
                    </tbody>
                </table>

                <h3>Weaknesses（弱み）</h3>
                <table>
                    <thead><tr><th>弱み</th><th>詳細</th></tr></thead>
                    <tbody>
                        <tr><td>巨大組織の官僚主義リスク</td><td>Thermo Fisherという巨大企業の一部門となったことで、意思決定のスピードが低下する可能性</td></tr>
                        <tr><td>独立性の喪失</td><td>独立上場企業から子会社化したことで、独自のブランディングや戦略的自由度が制限される可能性</td></tr>
                        <tr><td>統合コスト</td><td>Thermo Fisherとのシステム・プロセス統合に伴う一時的なコスト増と業務混乱</td></tr>
                        <tr><td>人材流出リスク</td><td>買収後の組織変更や文化変容に伴う優秀な人材の離職リスク</td></tr>
                        <tr><td>データ/アナリティクス事業の弱さ</td><td>IQVIAのような独自の大規模医療データベースを持たない</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">買収後の組織統合の課題</div>
                    <p>大規模な企業買収では、異なる企業文化の融合、重複する部門の整理、ITシステムの統合など、多くの課題が発生します。PPDとThermo Fisherの統合も例外ではなく、両社の文化やプロセスの違いを調整しながら、シナジー効果を最大化する取り組みが継続的に行われています。</p>
                </div>

                <h3>Opportunities（機会）</h3>
                <table>
                    <thead><tr><th>機会</th><th>詳細</th></tr></thead>
                    <tbody>
                        <tr><td>CRO市場の継続的成長</td><td>製薬企業のアウトソーシング率上昇（現在約50%、さらなる拡大が見込まれる）</td></tr>
                        <tr><td>バイオ医薬品の台頭</td><td>細胞治療・遺伝子治療などの複雑な開発案件がCROへの需要を押し上げ</td></tr>
                        <tr><td>アジア市場の成長</td><td>中国・インド・東南アジアでの臨床試験拡大</td></tr>
                        <tr><td>DCT/デジタル化</td><td>テクノロジー活用による効率向上と新しいサービスモデルの創出</td></tr>
                        <tr><td>クロスセリング</td><td>Thermo Fisherの既存顧客への臨床サービス提案による新規獲得</td></tr>
                        <tr><td>精密医療の進展</td><td>コンパニオン診断やバイオマーカー戦略へのニーズ拡大</td></tr>
                    </tbody>
                </table>

                <h3>Threats（脅威）</h3>
                <table>
                    <thead><tr><th>脅威</th><th>詳細</th></tr></thead>
                    <tbody>
                        <tr><td>CRO競争の激化</td><td>IQVIA、ICON（PRA統合後）などとの激しい競争。価格圧力の増大</td></tr>
                        <tr><td>人材確保の困難</td><td>CRA、統計解析担当者、データマネージャーなどの専門人材の獲得競争が激化</td></tr>
                        <tr><td>製薬企業のインソース回帰</td><td>一部の大手製薬が臨床開発機能の内製化を検討する動き</td></tr>
                        <tr><td>規制環境の変化</td><td>各国の規制変更への対応コスト増大（特にデータプライバシー規制）</td></tr>
                        <tr><td>地政学的リスク</td><td>米中関係の緊張、ロシア・ウクライナ情勢などによる特定地域での事業リスク</td></tr>
                        <tr><td>景気後退リスク</td><td>経済環境の悪化による製薬企業のR&D予算削減の可能性</td></tr>
                    </tbody>
                </table>

                <h3>総合評価</h3>
                <p>PPDはThermo Fisher Scientific傘下に入ったことで、財務基盤、技術基盤、グローバルインフラの面で大幅に強化されました。一方で、巨大組織の一部門となったことによる機動性の低下や独自ブランドの希薄化というリスクも存在します。CRO市場の安定的な成長トレンドと、バイオ医薬品・デジタル化という追い風の中で、PPDがThermo Fisherの資産をいかに活用してシナジーを発揮できるかが、今後の成長の鍵を握っています。</p>
            `,
            quiz: [
                { id: "q1101_1", type: "choice", question: "PPDの強み（Strengths）に含まれるものはどれですか？", options: ["世界最大の医療データベースの保有", "Thermo Fisherのバックボーンとラボサービスの統合", "独立上場企業としての自由度", "CROと製薬の両方の事業を持つこと"], answer: 1, explanation: "PPDの主要な強みには、Thermo Fisherの財務基盤・技術基盤の活用と、臨床開発とラボサービスの統合によるワンストップ体制があります。" },
                { id: "q1101_2", type: "choice", question: "PPDの脅威（Threats）として挙げられる「人材確保の困難」は、特にどのような職種で顕著ですか？", options: ["経理・財務担当者", "CRA、統計解析担当者、データマネージャー", "営業・マーケティング担当者", "総務・人事担当者"], answer: 1, explanation: "CRO業界では、CRA（臨床開発モニター）、統計解析担当者、データマネージャーなどの臨床試験専門人材の獲得競争が特に激化しています。" },
                { id: "q1101_3", type: "choice", question: "PPDの弱み（Weaknesses）としてThermo Fisher傘下に入ったことで懸念される点はどれですか？", options: ["グローバル拠点数の減少", "巨大組織の官僚主義による意思決定スピードの低下", "ラボサービスの廃止", "CRO事業からの撤退"], answer: 1, explanation: "Thermo Fisherという巨大企業の一部門となったことで、独立時代と比べて意思決定のスピードが低下する可能性が弱みとして指摘されています。" }
            ]
        }
    ]
};
