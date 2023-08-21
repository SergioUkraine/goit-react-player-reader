import Reader from './Reader';
import publications from '../../data/publications.json';

function ReaderPage() {
  return (
    <div>
      <Reader items={publications} />
    </div>
  );
}

export default ReaderPage;
