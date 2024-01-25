import axios from 'axios';
;

export const emptyDatabase = async () => {
  try {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL_API}/portfolios`);

    if (response.status === 200) {
      console.log('Database emptied successfully.');
    } else {
      console.error('Failed to empty the database.');
    }
  } catch (error) {
    console.error('Error while emptying the database:', error);
  }
};
