// スライダーの画像を切り替える
let currentIndex = 0;
const slides = document.querySelectorAll('.slider .slide');
const totalSlides = slides.length;

// 画像を切り替える関数
function nextSlide() {
  // 現在の画像を非表示
  slides[currentIndex].classList.remove('active');
  
  // 次の画像に切り替え（循環する）
  currentIndex = (currentIndex + 1) % totalSlides; // 最後の画像が表示されたら最初の画像に戻る
  
  // 新しい画像を表示
  slides[currentIndex].classList.add('active');
}

// スライドを5秒ごとに切り替え
const intervalTime = 5000; // 5秒ごとに切り替え
setInterval(nextSlide, intervalTime);
