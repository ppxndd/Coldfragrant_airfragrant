'use client';

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import styles from './ResultPage.module.css';

const ResultPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const element = searchParams.get('element');
    const qrImage = "/assets/images/qrLine.jpg";

    const data = {
        ปิตตะ: {
            healthIssues: ["มักเจ็บป่วยด้วยอาการไข้ ตัวร้อน เป็นแผลร้อนใน เป็นสิว ท้องผูก"],
            productImage: "/assets/images/fire.png",
            promotionImage: "/assets/images/promotions.jpg",
            quote: "ลดปิตตะในตัวคุณเพิ่มสมดุลให้แก่ธาตุ คุณจึงเหมาะกับ collection Fire",
        },
        เสมหะ: {
            healthIssues: ["มักเจ็บป่วยด้วยโรคทางเดินหายใจ เช่น น้ำมูก เสมหะ ภูมิแพ้ ระบบทางเดินอาหาร น้ำย่อยในกระเพาะอาหารและลำไส้ น้ำดี และระบบขับถ่ายอุจจาระปัสสาวะ เป็นต้น"],
            productImage: "/assets/images/water.png",
            promotionImage: "/assets/images/promotions.jpg",
            quote: "น้ำที่ท่วมใจวิดเร็วแค่ไหนก็ไม่ทัน คุณจึงเหมาะกับ collection Water",
        },
        วาตะ: {
            healthIssues: ["มักเจ็บป่วยด้วยอาการของระบบประสาท การไหลเวียนของโลหิต เช่น อาการวิงเวียนศีรษะ หน้ามืด อ่อนเพลีย ปวดเมื่อยได้ง่าย"],
            productImage: "/assets/images/wind.png",
            promotionImage: "/assets/images/promotions.jpg",
            quote: "วาตะของคุณพลุกพล่านทิ้งไว้นานจะเป็นเรื่อง คุณจึงเหมาะกับ collection Wind",
        },
    };

    const result = data[element] || {};
    const handleBack = () => {
        router.push('/sentences');
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                คุณเป็นชาว <span className={`${element === 'วาตะ'
                        ? styles.titleVata
                        : element === 'เสมหะ'
                            ? styles.titleSemha
                            : styles.titlePitta
                    }`}>{element}</span>
            </h1>
            <ul className={styles.healthIssues}>
                {result.healthIssues &&
                    result.healthIssues.map((issue, index) => (
                        <li key={index}>{issue}</li>
                    ))}
            </ul>
            <p className={styles.quote}>{result.quote}</p>
            <img src={result.productImage} alt="Product Image" className={styles.image} />
            <p
                className={`${styles.promotion} ${element === 'วาตะ'
                    ? styles.promotionVata
                    : element === 'เสมหะ'
                        ? styles.promotionSemha
                        : styles.promotionPitta
                    }`}
            >
                {element === 'วาตะ'
                    ? 'WIND Collection Spray'
                    : element === 'เสมหะ'
                        ? 'WATER Collection Spray'
                        : 'FIRE Collection Spray'}
            </p>

            {/* โปรโมชั่น */}
            {result.promotionImage && (
                <img
                    src={result.promotionImage}
                    alt="Promotion Image"
                    className={styles.promotionImage}
                />
            )}
            
            {/* ช่องทางติดต่อ */}
            <div className={styles.qrContainer}>
                <p className={styles.qrText}>แสกน QR Code เพื่อสอบถามเพิ่มเติม</p>
                <img 
                    src={qrImage} alt="QR Code Line"
                    className={styles.qrImage}
                />
            </div>
            <button onClick={handleBack} className={styles.button}>ย้อนกลับ</button>
        </div>
    );
};

export default ResultPage;