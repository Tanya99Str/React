import './PaginationComponent.css';
import {useSearchParams} from "react-router-dom";

export const PaginationComponent = (totalUsers: number) => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    let currentPage = Number(searchParams.get("page") || '1');
    // console.log(totalUsers);
    return (
        <div className="pagination">
            <button onClick={() => {
                if (currentPage > 1) {
                    setSearchParams({page: (--currentPage).toString()});
                }
            }}>Назад
            </button>
            <button onClick={() => {

                console.log(typeof parseInt(totalUsers.toString()));
                console.log(currentPage < parseInt(totalUsers.toString())/30);

                if (currentPage < parseInt(totalUsers.toString())/30) {
                    setSearchParams({page: (++currentPage).toString()});
                }
            }}>Вперед
            </button>
        </div>
    );
};
