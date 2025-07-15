import FlowingMenu from '../ReactBits/FlowingMenu';
import summerImg from '../assets/summer.jpg';
import winterImg from '../assets/winter.jpg';
import allTimeImg from '../assets/allTime.jpg';

const demoItems = [
  { link: '#', text: 'Winters', image: winterImg },
  { link: '#', text: 'Summer', image: summerImg },
  { link: '#', text: 'All time', image: allTimeImg },
  { link: '#', text: 'Special', image: allTimeImg }
];

export default function Season() {
  return (
    <div style={{ height: '500px', position: 'relative' }} className="font-michroma tracking-widest">
      <FlowingMenu items={demoItems} />
    </div>
  );
}
