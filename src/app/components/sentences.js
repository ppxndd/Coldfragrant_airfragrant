import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Sentences.module.css';

const sentences = [
    { text: 'หัวตื้อสมองไม่ปลอดโปร่ง', type: 'วาตะ' },
    { text: 'ผ่อนคลายใจฟู', type: 'วาตะ' },
    { text: 'ตื่นเต้นจนใจเต้นแรง', type: 'วาตะ' },
    { text: 'ร่าเริงจิตใจเบิกบาน', type: 'วาตะ' },
    { text: 'สุขใจเหมือนโลกสดใสทั้งวัน', type: 'วาตะ' },
    { text: 'โล่งใจคลายความกังวล', type: 'วาตะ' },
    { text: 'สมองตื้อ คิดอะไรไม่ออก', type: 'วาตะ' },
    { text: 'ครุ่นคิดมาก หัวจิปวด', type: 'วาตะ' },
    { text: 'สมองล้า ความคิดยุ่งเหยิง', type: 'วาตะ' },
    { text: 'ใจล่องลอย ไม่สนใจใคร', type: 'วาตะ' },
    { text: 'ร่าเริงสดใส หัวใจพองโต', type: 'วาตะ' },
    { text: 'เร้าใจกระตือรือร้น', type: 'วาตะ' },
    { text: 'ผ่อนคลายสบายใจ', type: 'วาตะ' },
    { text: 'อยากสงบ แต่ใจว้าวุ่น', type: 'วาตะ' },
    { text: 'สมองเบลอ คิดอะไรไม่ออก', type: 'วาตะ' },
    { text: 'โดดเดี่ยวเดียวดาย', type: 'เสมหะ' },
    { text: 'นอนน้อย แต่นอนนะ', type: 'เสมหะ' },
    { text: 'ง่วงเหงาหาวนอนจนแทบสลบ', type: 'เสมหะ' },
    { text: 'อ่อนเปลี้ยเพลียแรง', type: 'เสมหะ' },
    { text: 'กะปรี้กระเปร่า', type: 'เสมหะ' },
    { text: 'ทุกข์ใจเหมือนแบกโลกไว้บนบ่า', type: 'เสมหะ' },
    { text: 'เศร้า เสียใจ หัวใจหนักอึ้ง', type: 'เสมหะ' },
    { text: 'หมดหวัง หมดกำลังใจ', type: 'เสมหะ' },
    { text: 'เบื่อหน่าย วัยรุ่นเซ็ง', type: 'เสมหะ' },
    { text: 'หมดแรงอ่อนล้า', type: 'เสมหะ' },
    { text: 'หมดหวังสิ้นกำลังใจ', type: 'เสมหะ' },
    { text: 'เศร้าสลดหดหู่', type: 'เสมหะ' },
    { text: 'ปล่อยใจจอย ไม่สนใจใคร', type: 'เสมหะ' },
    { text: 'อิ่มอกอิ่มใจ', type: 'เสมหะ' },
    { text: 'ผ่อนคลายใจเย็น', type: 'เสมหะ' },
    { text: 'หัวร้อน ฉุนเฉียว เกรี้ยวกราด', type: 'ปิตตะ' },
    { text: 'ครุ่นคิด วิตกกังวล', type: 'ปิตตะ' },
    { text: 'เกรี้ยวกราดเดือดดาล', type: 'ปิตตะ' },
    { text: 'โกรธจัดจนเลือดขึ้นหน้า', type: 'ปิตตะ' },
    { text: 'ผมนี่ขึ้นเลย', type: 'ปิตตะ' },
    { text: 'ฉุนเฉียวดุจน้ำที่เดือดพล่าน', type: 'ปิตตะ' },
    { text: 'เดือดดานดุจไฟป่า', type: 'ปิตตะ' },
    { text: 'โลกที่ร้อนยังไม่เท่าหัวฉันในตอนนี้', type: 'ปิตตะ' },
    { text: 'เดือดเนื้อร้อนใจ', type: 'ปิตตะ' },
    { text: 'อดทนอดกลั้นไม่ไหว', type: 'ปิตตะ' },
    { text: 'หงุดหงิดอยากติดถ้ำ', type: 'ปิตตะ' },
    { text: 'อยากมองบนใส่คนอย่างเธอ', type: 'ปิตตะ' },
    { text: 'เลือดร้อนอยากนอนหยอดข้าวต้ม', type: 'ปิตตะ' },
    { text: 'หัวจะระเบิดอยากเกิดใหม่', type: 'ปิตตะ' },
    { text: 'อารมณ์ร้อนมองค้อนไม่รู้ตัว', type: 'ปิตตะ' },
];

export default function SentencesPage() {
    const [selectedSentences, setSelectedSentences] = useState([]);
    const [result, setResult] = useState(null);
    const router = useRouter();

    const toggleSentence = (sentence) => {
        setSelectedSentences((prev) =>
            prev.includes(sentence)
                ? prev.filter((item) => item !== sentence)
                : [...prev, sentence]
        );
    };

    const handleSubmit = () => {
        if (selectedSentences.length === 0) {
            alert('กรุณาเลือกประโยคอย่างน้อย 1 ประโยค');
            return;
        }

        // คำนวณผลลัพธ์ (ตัวอย่าง: นับจำนวนประเภทที่เลือก)
        const typeCount = selectedSentences.reduce((acc, sentence) => {
            acc[sentence.type] = (acc[sentence.type] || 0) + 1;
            return acc;
        }, {});

        const dominantType = Object.entries(typeCount).reduce(
            (max, entry) => (entry[1] > max[1] ? entry : max),
            ['', 0]
        )[0];

        // setResult({
        //     type: dominantType,
        //     advice: `ปัญหาสุขภาพที่ควรระวัง :${dominantType === 'วาตะ'
        //         ? 'ปัญหาสมองล้าและความวิตกกังวล'
        //         : dominantType === 'เสมหะ'
        //             ? 'ปัญหาเกี่ยวกับความเฉื่อยและอารมณ์เศร้า'
        //             : 'ปัญหาอารมณ์ร้อนและความเครียด'
        //         }`,
        //     product: `${dominantType === 'วาตะ'
        //         ? 'ช่วยผ่อนคลายและลดความเครียด'
        //         : dominantType === 'เสมหะ'
        //             ? 'ช่วยเพิ่มความสดชื่นและกระตุ้นความตื่นตัว'
        //             : 'ช่วยผ่อนคลายและสงบจิตใจ'
        //         }`
        // });
        router.push(`/result?element=${dominantType}`);
        setSelectedSentences([]);
    };

    const handleBack = () => {
        router.push('/');
    }

    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <h1 className={styles.title}>เลือกประโยคที่ตรงกับความรู้สึกคุณตอนนี้ (4-5ข้อ)</h1>
                <div className={styles.sentenceList}>
                    {sentences.map((sentence, index) => (
                        <button
                            key={index}
                            className={`${styles.sentenceButton} ${selectedSentences.includes(sentence) ? styles.selected : ''}`}
                            onClick={() => toggleSentence(sentence)}
                        >
                            {sentence.text}
                        </button>
                    ))}
                </div>
                <div className={styles.buttonContainer}>
                    <button onClick={handleSubmit} className={styles.submitButton}>
                        ยืนยันการเลือก
                    </button>
                    <button onClick={handleBack} className={styles.backButton}>
                        ย้อนกลับ
                    </button>
                </div>

                {/* หมายเหตุสำหรับการเลือก */}
                <p className={styles.note}>* สามารถเลือกได้มากกว่า 1 ประโยค</p>

                {/* Popup แสดงผลลัพธ์ */}
                
            </div>
        </div>
    );
}