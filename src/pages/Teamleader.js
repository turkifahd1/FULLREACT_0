
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد مكتبة Bootstrap CSS
import {  Col } from 'react-bootstrap'; // استيراد مكونات Bootstrap





// العنصر الفرعي لعرض شخص واحد هنا نكتب كل عنصر
 

const Teamleader = ({img ,name, age, Telefon,Address }) => (
  <Col xs={12} sm={6} md={4}> {/* تحديد عدد الأعمدة في كل حجم شاشة */}
    <div className="card">
      <div className= "card-header">
        <img src={img} alt={name}   style={{ width: '440px', height: '300px'}}/>
      </div>
      <div className="card-body">
        <h2><strong></strong> {name}</h2>
        <p ><strong >Age:</strong> {age}</p>
        <p><strong  >Telefon:</strong> {Telefon}</p>
        <p><strong >Address:</strong> {Address}</p>
      </div>
    </div>
  </Col>
);
export default Teamleader;