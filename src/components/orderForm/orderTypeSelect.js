import React from 'react';
import styled from 'styled-components';

const InputText = ({ label, onChange, suffix, type = 'text', ...props }) => {
	return (
		<InputBox>
			<InputLabel>{label}</InputLabel>
			<select {...props} onChange={onChange} style={{ padding: '6px 24px', margin: '16px 0' }}>
				<option value="1">Event Order</option>
				<option value="2">Direct Order</option>
				<option value="3">Story Order</option>
			</select>
		</InputBox>
	);
};

export default InputText;

//style

const InputBox = styled.label`
	display: flex;
	flex-direction: column;
	border: 1px solid rgba(0, 0, 0, 0.15);
	padding: 6px 24px;
`;

const InputLabel = styled.span`
	line-height: 24px;
	font-size: 14px;
`;
