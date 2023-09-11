import axios from 'axios';
import { renderHook, waitFor } from '@testing-library/react';
import useFetchUsers from './index';


describe('測試 useFetchUsers', () => {
    it('fetches and returns users', async () => {
      
        const mock = jest.spyOn(axios, 'get');
        mock.mockResolvedValueOnce({
            data: [
                { id: '1', username: 'Dylan' },
                { id: '2', username: 'John' },
            ],
        });

        const hook = renderHook(() => useFetchUsers());
        await waitFor(() => {
            expect(hook.result.current).toEqual([
                { id: '1', username: 'Dylan' },
                { id: '2', username: 'John' },
            ]);
        });
    });

    it('if error return empty array', async () => {
        const mock = jest.spyOn(axios, 'get');
        mock.mockRejectedValueOnce(new Error('error'));

        const hook = renderHook(() => useFetchUsers());
        await waitFor(() => {
            expect(hook.result.current).toEqual([]);
        });
    }
    );

});