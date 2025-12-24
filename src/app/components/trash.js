{result && (
    <div className={styles.popupOverlay}>
        <div className={styles.popupContent}>
            <div className={styles.productContent}>
                {/* ฝั่งซ้าย: ผลลัพธ์ */}
                <div className={styles.popupLeft}>
                    <h2 className={styles.popupTitle}>ผลลัพธ์ของคุณ</h2>
                    <p className={styles.popupText}>
                        ธาตุที่ตรงกับคุณมากที่สุด: <b>{result.type}</b>
                    </p>
                    <p className={styles.popupAdvice}>{result.advice}</p>
                    <p className={styles.popupProduct}>{result.product}</p>
                    <img
                        src={`assets/images/${result.type}.png`}
                        alt={result.type}
                        className={styles.resultImage}
                    />
                </div>

                {/* ฝั่งขวา: รูปโปรโมชัน */}
                <div className={styles.popupRight}>
                    <img
                        src={`assets/images/promotions.png`}
                        alt="promotions"
                        className={styles.promotionImage}
                    />
                </div>
            </div>

            {/* ปุ่มปิด */}
            <div className={styles.closeContainer}>
                <button onClick={closePopup} className={styles.closeButton}>
                    ปิด
                </button>
            </div>
        </div>
    </div>
)}