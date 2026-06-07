<p align="center">
  <a href="https://www.uit.edu.vn/" title="Trường Đại học Công nghệ Thông tin" style="border: none;">
    <img src="https://i.imgur.com/WmMnSRt.png" alt="Trường Đại học Công nghệ Thông tin | University of Information Technology">
  </a>
</p>

<h1 align="center"><b>ĐỒ HOẠ MÁY TÍNH</b></h1>

## THÀNH VIÊN NHÓM
| STT | MSSV     | Họ và Tên            | Chức Vụ     | Email                   |
| :-: | :------: | :------------------: | :---------: | :---------------------: |
| 1   | 23521436 | Bùi Ngọc Thiên Thanh | Nhóm trưởng | 23521436@gm.uit.edu.vn  |
| 2   | 23520004 | Đinh Lê Bình An      | Thành viên  | 23520004@gm.uit.edu.vn  |
| 3   | 23520105 | Huỳnh Thái Bảo       | Thành viên  | 23520105@gm.uit.edu.vn  |
| 4   | 23520609 | Lâm Quang Huy        | Thành viên  | 23520609@gm.uit.edu.vn  |

## GIỚI THIỆU MÔN HỌC
* **Tên môn học:** Đồ hoạ máy tính
* **Mã lớp:** CS105.Q22
* **Năm học:** HK2 (2025 - 2026)
* **Giảng viên**: ThS. Cáp Phạm Đình Thăng

## QUÁ TRÌNH KHẢO SÁT VÀ NỀN TẢNG ĐỒ HỌA
### Week 1 & 2: Khảo sát cấu trúc mô hình hình khối (Procedural Modeling)
  - Thay vì sử dụng phần mềm dựng hình bên thứ ba như Blender, dự án tập trung nghiên cứu phương pháp kiến tạo mô hình trực tiếp bằng mã nguồn lập trình thông qua ma trận biến đổi toán học.
  - Các thực thể cốt lõi được kế thừa và tùy biến cấu trúc đỉnh từ các lớp hình học cơ sở:
    - Máy bay và khoang lái: Sử dụng cấu trúc khối hộp `THREE.BoxGeometry`.
    - Trục quay và cánh quạt: Sử dụng khối trụ `THREE.CylinderGeometry`.
    - Khối mây và đá chướng ngại vật: Sử dụng khối đa diện `THREE.TetrahedronGeometry`.
  - Code khởi tạo: [Airplane Model Generation](https://github.com/Azure1709/CS105.Q22/tree/main/Endless%20Flight)

### Week 3 & 4: Hệ thống ánh sáng và Đa góc nhìn Camera (Multi-viewport)
  - **Hệ thống ánh sáng môi trường:** Kết hợp linh hoạt ba nguồn sáng chính giúp tạo chiều sâu không gian không cần sử dụng phần mềm hậu kỳ:
    - `THREE.HemisphereLight`: Ánh sáng bán cầu mô phỏng bầu trời.
    - `THREE.AmbientLight`: Ánh sáng môi trường khuếch tán.
    - `THREE.DirectionalLight`: Ánh sáng hướng tạo bóng đổ trực quan đổ lên mặt biển.
  - **Cơ chế Đa góc nhìn (Switch View):** Thiết lập hàm xử lý cho phép thay đổi cấu hình camera thời gian thực:
    - *Side View:* Góc nhìn ngang cố định truyền thống bao quát màn chơi.
    - *Tail-to-Front View:* Góc nhìn động bám đuôi phi cơ hướng về phía trước.
  - Bài tập thực nghiệm: [Camera & Light Setup](https://github.com/Azure1709/CS105.Q22/tree/main/Endless%20Flight)

### Week 5 & 6: Chuyển đổi Bề mặt Chất liệu (Switch Texture) và Mô phỏng Sóng biển động
  - **Switch Texture:** Tích hợp bộ nạp kết cấu `THREE.TextureLoader` hỗ trợ chuyển đổi vật liệu nền của đại dương động ngay trong quá trình render mà không gây sụt giảm FPS phần cứng, chuyển đổi linh hoạt giữa tệp ảnh bề mặt nước biển (`sea.jpg`) và thảm cỏ đất liền (`grass.jpg`).
  - **Mô phỏng sóng biển:** Sử dụng thuật toán dịch chuyển tọa độ đỉnh (`geometry.verticesNeedUpdate`) kết hợp hàm lượng giác để tạo sóng biển nhấp nhô ngẫu nhiên.
  - Bài tập thực nghiệm: [Texture & Ocean Wave](https://github.com/Azure1709/CS105.Q22/tree/main/Endless%20Flight)

### Week 7 & 8: Hoạt ảnh động và Hệ thống hạt vật lý va chạm (Particle System)
  - **Hoạt ảnh TweenMax:** Sử dụng thư viện `TweenMax` để nội suy chuyển động mượt mà cho các thực thể nhỏ như hoạt ảnh tóc của phi công bay trong gió hoặc chuyển động nổ hạt.
  - **Particle System:** Xây dựng hệ thống quản lý hạt qua hồ chứa tối ưu bộ nhớ `particlesPool`. Khi xảy ra va chạm, hàm `explode()` được gọi để tạo vụ nổ hạt màu ngẫu nhiên tự động phân rã và biến mất.
  - Bài tập thực nghiệm: [Particle Explosion & Animation](https://github.com/Azure1709/CS105.Q22/tree/main/Endless%20Flight)

## ĐỒ ÁN CUỐI KÌ
### Giới thiệu đề tài
  - **Tên đề tài:** Nghiên cứu và xây dựng chương trình mô phỏng không gian bay ba chiều thời gian thực sử dụng thư viện Three.js (Ứng dụng "Endless Flight").
  - **Cốt truyện & Ý tưởng:** Dự án lấy cảm hứng sâu sắc từ tinh thần chinh phục bầu trời bất tận trong tác phẩm điện ảnh *"The Aviator"* kết hợp cùng lối chơi chạy vô tận (Endless Runner) không hồi kết kinh điển của *"Chrome Dino Game"*. Người chơi sẽ điều khiển một phi cơ cổ điển liên tục tiến về phía trước, thu thập năng lượng và né tránh vật cản với nhịp độ tăng dần theo thời gian.
  - File báo cáo: [Final Report.pdf](https://github.com/Azure1709/CS105.Q22/tree/main/Endless%20Flight)

### Thực nghiệm
  - Source code: [Endless Flight Source Code](https://github.com/Azure1709/CS105.Q22/tree/main/Endless%20Flight)
  - Demo ứng dụng Web: [Endless Flight Web Deployment](https://Azure1709.github.io/CS105.Q22/)
  
  <p align='center'>
    <img src="image_e5f43e.jpg" alt="Giao diện Khởi đầu Màn hình chờ Game Endless Flight 3D" width="85%">
  </p>
  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`Copyright © 2026 - Endless Flight Team`
