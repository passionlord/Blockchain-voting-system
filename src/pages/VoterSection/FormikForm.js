import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import "./FormikForm.css";

const form_id = "form_id";
class MaintenanceForm extends Component {
  editOnClick = (event) => {
    event.preventDefault();
    const data = !this?.props?.status?.edit;
    this.props.setStatus({
      edit: data,
    });
  };

  cancelOnClick = (event) => {
    event.preventDefault();
    this.props.resetForm();
    this.props.setStatus({
      edit: false,
    });
  };

  _renderAction() {
    return (
      <React.Fragment>
        <div className="form-statusbar">
          {this?.props?.status?.edit ? (
            <React.Fragment>
              <button
                className="btn btn-primary btn-sm"
                type="submit"
                form={form_id}
              >
                Save
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={this.cancelOnClick}
                style={{ marginLeft: "8px" }}
              >
                Cancel
              </button>
            </React.Fragment>
          ) : (
            <button
              className="btn btn-primary btn-sm"
              onClick={this.editOnClick}
            >
              Edit
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }

  _renderFormView = () => {
    return (
      <React.Fragment>
        <div className="form-group row space">
          <label className="col-sm-2 col-form-label">Department</label>
          <div className="col-sm-10">
            <label
              type="text"
              department="name"
              className="form-control customStyle"
            >
              {this?.props?.fields?.department}
            </label>
          </div>
        </div>
        <div className="form-group row space">
          <label className="col-sm-2 col-form-label">Year</label>
          <div className="col-sm-10">
            <label type="text" year="year" className="form-control customStyle">
              {this?.props?.fields?.year}
            </label>
          </div>
        </div>
        <div className="form-group row space">
          <label className="col-sm-2 col-form-label">Address</label>
          <div className="col-sm-10">
            <label
              type="text"
              address="address"
              className="form-control customStyle customStyle"
            >
              {this?.props?.fields?.address}
            </label>
          </div>
        </div>
        <div className="form-group row space">
          <label className="col-sm-2 col-form-label">Pincode</label>
          <div className="col-sm-10">
            <label
              type="text"
              pincode="pincode"
              className="form-control customStyle"
            >
              {this?.props?.fields?.pincode}
            </label>
          </div>
        </div>
        <div className="form-group row space">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <label
              type="text"
              name="brand_name"
              className="form-control customStyle"
            >
              {this?.props?.fields?.email}
            </label>
          </div>
        </div>
        <div className="form-group row space">
          <label className="col-sm-2 col-form-label">Mobile No</label>
          <div className="col-sm-10">
            <label
              type="text"
              name="device_type"
              className="form-control customStyle"
            >
              {this?.props?.fields?.mobile_no}
            </label>
          </div>
        </div>
        <div className="form-group row space">
          <label className="col-sm-2 col-form-label">Promises</label>
          <div className="col-sm-10">
            <label
              type="text"
              promises="device_type"
              className="form-control customStyle"
            >
              {this?.props?.fields?.promises}
            </label>
          </div>
        </div>
      </React.Fragment>
    );
  };

  _renderFormInput = () => {
    return (
      <React.Fragment>
        <div className="form-group row space">
          <label className="col-sm-2 col-form-label">Department</label>
          <div className="col-sm-10 ">
            <Field
              type="text"
              name="department"
              className="form-control customStyle"
              placeholder="department"
            />
          </div>
        </div>
        <div className="form-group row space">
          <label className="col-sm-2 col-form-label">Year</label>
          <div className="col-sm-10">
            <Field
              type="text"
              name="year"
              className="form-control customStyle"
              placeholder="year"
            />
          </div>
        </div>
        <div className="form-group row space">
          <label className="col-sm-2 col-form-label">Address</label>
          <div className="col-sm-10">
            <Field
              type="text"
              name="address"
              className="form-control customStyle"
              placeholder="enter address"
            />
          </div>
        </div>
        <div className="form-group row space">
          <label className="col-sm-2 col-form-label">Pincode</label>
          <div className="col-sm-10">
            <Field
              type="text"
              name="pincode"
              className="form-control customStyle"
              placeholder="enter pincode"
            />
          </div>
        </div>
        <div className="form-group row space">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <Field
              type="text"
              name="email"
              className="form-control customStyle"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-group row space">
          <label className="col-sm-2 col-form-label">Mobile No</label>
          <div className="col-sm-10">
            <Field
              type="text"
              name="mobile_no"
              className="form-control customStyle"
              placeholder="Mobile No"
            />
          </div>
        </div>
        <div className="form-group row space">
          <label className="col-sm-2 col-form-label">Promises</label>
          <div className="col-sm-10">
            <Field
              type="text"
              name="promises"
              className="form-control customStyle"
              placeholder="promises"
            />
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this._renderAction()}
        <Form id={form_id}>
          {this?.props?.status?.edit
            ? this._renderFormInput()
            : this._renderFormView()}
        </Form>
        {/* <h4>Current value</h4>
        <div>
          <code>{JSON.stringify(this.props.fields, null, 2)}</code>
        </div> */}
      </React.Fragment>
    );
  }
}

const FormikForm = withFormik({
  mapPropsToStatus: (props) => {
    return {
      edit: props?.edit || false,
    };
  },
  mapPropsToValues: (props) => {
    return {
      department: props.fields.department,
      year: props.fields.year,
      address: props.fields.address,
      pincode: props.fields.pincode,
      email: props.fields.email,
      mobile_no: props.fields.mobile_no,
      promises: props.fields.promises,
    };
  },
  enableReinitialize: true,
  handleSubmit: (values, { props, ...actions }) => {
    props.updateFields(values);
    console.log(values);
    actions.setStatus({
      edit: false,
    });
  },
})(MaintenanceForm);

export default FormikForm;
