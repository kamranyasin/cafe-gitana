import React, { useEffect, useContext } from "react";
import { Form, Input, Button } from "antd";
import Alert from "react-bootstrap/Alert";
import { Upload, Modal } from "antd";

import { PlusOutlined } from "@ant-design/icons";
import axiosInstance from "../axios-Instance";
import { Select } from "antd";
import { MdDeleteSweep } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { ContextApi } from "../ContextApi/ContextApi";
import { useTranslation } from "react-i18next";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled, useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import PropTypes from "prop-types";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function StorePickup(props) {
  const { t, i18n } = useTranslation();
  const [value, setvalue] = React.useState({
    items: [],
    tabledelete: null,
  });
  const contextType = useContext(ContextApi);

  console.log("contextType.submittedOrderData", [
    contextType.submittedOrderData,
  ]);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const [isModalView, setIsModalView] = React.useState(false);
  const [item, setitem] = React.useState([]);

  const [deleteItemId, setDeleteItemId] = React.useState(null);
  const [ordersQueue, setOrdersQueue] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const showModal = (itemId) => {
    setIsModalVisible(true);
    setDeleteItemId(itemId);
  };
  const showModalView = (item) => {
    setIsModalView(true);
    const array = [];
    array.push(item);
    // setitem(item);
    setitem(array);
    console.log("array", item);
  };
  const handleViewCanceled = () => {
    setIsModalView(false);
  };
  const handleCanceled = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    axiosInstance
      .get("storepickUp/getAll")
      .then((res) => {
        setOrdersQueue(res.data.item);
        console.log("submittedOrders", res.data.item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    console.log("delete id", id);

    axiosInstance
      .delete(`submittedOrders/delete/${id}`)
      .then((res) => {
        console.log("item deleted", res.data);
        setIsModalVisible(false);
        axiosInstance
          .get("submittedOrders/getAll")
          .then(async (res) => {
            setvalue({
              items: res.data.item,
              alert: {
                variant: "danger",
                message: "Item Deleted Successfully",
              },
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - ordersQueue.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div className="container-fluid   height">
      <div className="row text-center">
        {/* <h2>{t("orders.100")}</h2> */}
        <h2>Shop Pick Up Orders</h2>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1800 }} aria-label="sticky table" stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" width="150px">
                Customer Name
              </StyledTableCell>
              <StyledTableCell align="center" width="150px">
                No of Purchased Items
              </StyledTableCell>
              <StyledTableCell align="center" width="350px">
                Purchased Items
              </StyledTableCell>
              <StyledTableCell align="center" width="150px">
                Total Paid Amount
              </StyledTableCell>
              <StyledTableCell align="center" width="300px">
                Email
              </StyledTableCell>
              <StyledTableCell align="center" width="300px">
                Phone Number
              </StyledTableCell>
              <StyledTableCell align="center" width="300px">
                Date and Time
              </StyledTableCell>

              <StyledTableCell align="center" width="100px">
                Delete
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? ordersQueue.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : ordersQueue
            ).map((f, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  align="center"
                  width="150px"
                >
                  {f?.name + " " + f.surName}
                </StyledTableCell>
                <StyledTableCell align="center" width="150px">
                  {f.storeItems?.length}
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  component="th"
                  scope="row"
                  size="medium"
                  width="350px"
                >
                  <span>
                    {" "}
                    {f.storeItems?.map((item, index) => (
                      <div className="row w-100">
                        <div className="col-8">
                          ({item.count}){item.name}
                        </div>
                        <div className="col-4">${item.calculategst}</div>
                      </div>
                    ))}
                  </span>
                </StyledTableCell>
                <StyledTableCell align="center" width="150px">
                  {" "}
                  ${f.totalPrice}
                </StyledTableCell>
                <StyledTableCell align="center" width="300px">
                  {" "}
                  {f?.emailaddress}
                </StyledTableCell>
                <StyledTableCell align="center" width="300px">
                  {f.phoneNumber}
                </StyledTableCell>
                <StyledTableCell align="center" width="300px">
                  {f.dateandTime}
                </StyledTableCell>

                <StyledTableCell align="center" width="100px">
                  {f.data?.payingMethod === "Paypal" ? "Paypal" : "Stripe"}
                </StyledTableCell>
              </StyledTableRow>
            ))}
            {emptyRows > 0 && (
              <StyledTableRow style={{ height: 53 * emptyRows }}>
                <StyledTableCell colSpan={9} />
              </StyledTableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={4}
                count={ordersQueue.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <Modal
        title="Delete Item"
        visible={isModalVisible}
        onOk={() => handleDelete(deleteItemId)}
        onCancel={handleCanceled}
      >
        <p>Are you sure to delete this item?</p>
      </Modal>

      <div>
        <Modal
          title="Order List"
          visible={isModalView}
          onOk={handleViewCanceled}
          onCancel={handleViewCanceled}
        >
          <div className="row">
            {/* <div className="d-flex justify-content-center">
                  <img src={Logo} className="view-img" />
                </div> */}
            <div className="col-12 d-flex ">
              <span className="view-text-bold">Customer Name : </span>
              <span className="view-text"> Muhammadzia </span>
            </div>

            <div className="col-12 d-flex ">
              <span className="view-text-bold">No of purchased Itmes</span>
              <span className="view-text">2</span>
            </div>

            <div className="col-12 d-flex">
              <span className="view-text-bold"> Total Paid Amount:</span>
              <span className="view-text">250</span>
            </div>
            <div className="col-12 d-flex ">
              <span className="view-text-bold">Customer Email:</span>
              <span className="view-text">300</span>
            </div>

            <div className="col-12 d-flex ">
              <span className="view-text-bold">shipping Address :</span>
              <span className="view-text">qtr 161/1</span>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default StorePickup;
