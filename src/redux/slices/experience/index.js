import { createSlice } from '@reduxjs/toolkit';

export const experienceSlice = createSlice({
    name: 'experience',
    initialState: {
        list: [
            {
                companyName: 'Webreinvent Technologies Pvt. Ltd.',
                id: 'WRI/20230719/498',
                positions: [
                    {
                        role: 'Frontend Developer',
                    },
                    {
                        role: 'Frontend Developer Trainee',
                    },
                    {
                        role: 'Frontend Developer Intern',
                    }
                ]
            }
        ]
    },
    reducers: {

    }
})

// export const { } = experienceSlice.actions;

export default experienceSlice.reducer;