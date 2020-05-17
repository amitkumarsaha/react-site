import PropTypes from 'prop-types';
import React from 'react';
import TextInput from "../common/text.input";
import Modal from "../common/modal";
import SelectInput from "../common/select.input";

const AddUnitForm = ({
                             formTitle, unit, siPrefixes, onSave, addSiPrefix,
                             onChange, isLoading, errors, onModalOpen, onModalClose, showModal
                         }) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <div className="panel-title">
                    {formTitle}
                </div>
            </div>
            <div className="panel-body">
                <form>
                    <TextInput name="name" label="Name" onChange={onChange} value={unit.name} error={errors.name}/>

                    <TextInput name="symbol" label="Symbol" onChange={onChange} value={unit.symbol} error={errors.symbol}/>

                    <Modal isOpen={showModal} onClose={onModalClose}>
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    Add SI Unit
                                </div>
                            </div>
                            <div className="panel-body">
                                <SelectInput name="siPrefix" label="" onChange={addSiPrefix} value={unit.selectedPrefix} options={siPrefixes}/>
                            </div>
                            <div className="panel-footer text-right">
                                <button onClick={onModalClose}>Close</button>
                            </div>
                        </div>
                    </Modal>

                    <div className="form-group row">
                        <div className="col-md-12 text-right">
                            <button className="btn btn-default" onClick={onModalOpen}>Add SI Prefix</button>
                            <input
                                type="submit"
                                disabled={isLoading}
                                value={isLoading ? 'Saving...' : 'Save'}
                                className={isLoading ? 'btn btn-success' : 'btn btn-primary'}
                                onClick={onSave}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

AddUnitForm.propTypes = {
    formTitle: PropTypes.string,
    unit: PropTypes.object.isRequired,
    siPrefixes: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired,
    addSiPrefix: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    onModalOpen: PropTypes.func,
    onModalClose: PropTypes.func,
    showModal: PropTypes.bool
};

export default AddUnitForm;