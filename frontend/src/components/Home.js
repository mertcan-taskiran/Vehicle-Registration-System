import React, { Component } from 'react';
import CarService from '../services/CarService';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cars: [],
        };
    }

    deleteCar(id) {
        CarService.deleteCar(id).then((res) => {
            this.setState({ cars: this.state.cars.filter((car) => car.id !== id) });
            toast.success('Car deleted successfully!');
        });
    }

    componentDidMount() {
        CarService.getCars().then((res) => {
            this.setState({ cars: res.data });
        });
    }

    render() {
        const data = this.state.cars;
        const columns = [
            {
                Header: 'Car Name',
                accessor: 'carName',
            },
            {
                Header: 'Brand',
                accessor: 'brand',
            },
            {
                Header: 'Modal',
                accessor: 'modal',
            },
            {
                Header: 'Year',
                accessor: 'year',
            },
            {
                Header: 'Plaka',
                accessor: 'plaka',
            },
            {
                Header: 'Update/Delete',
                accessor: 'id',
                Cell: ({ value }) => (
                    <div>
                        <Link to={`/update-car/${value}`} type="button" className="btn btn-primary border-3">
                            Update
                        </Link>
                        <button onClick={() => this.deleteCar(value)} className="btn btn-danger ms-2">
                            Delete
                        </button>
                    </div>
                ),
            },
        ];

        return (
            <div>
                <h3>My Cars</h3>
                <hr />
                <div className="row mt-3">
                    <div className="col-6">
                        <Link to="/add-car" type="button" className="btn border border-primary border-3">
                            <span className="text-primary">+ Add New Car</span>
                        </Link>
                    </div>
                </div>

                <div className="row mt-3">
                    <Table columns={columns} data={data} />
                </div>
            </div>
        );
    }
}


function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        setGlobalFilter,
        state: { pageIndex, pageSize },
        gotoPage,
        canPreviousPage,
        previousPage,
        canNextPage,
        nextPage,
        pageCount,
        setPageSize,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 5 },
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setGlobalFilter(e.target.value)}
            />
            <table className="table table-striped table-bordered text-center" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div>
                <div className='d-flex justify-content-around'>
                    <span>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} / {Math.ceil(data.length / pageSize)}
                        </strong>{' '}
                    </span>
                    <div>
                        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>{' '}
                        <button onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</button>{' '}
                        <button onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</button>{' '}
                        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>{' '}
                    </div>
                    <span>
                        {' '}
                        <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
                            {[5, 10, 15, 20, 25].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                    {pageSize}
                                </option>
                            ))}
                        </select>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Home;
