import { useCallback, useMemo, useState } from "react";

export function useDialogState(defaultOpen = false) {
	const [open, setOpen] = useState(defaultOpen);

	const openCb = useCallback(() => { setOpen(true) }, []);
	const closeCb = useCallback(() => { setOpen(false) }, []);
	const toggleCb = useCallback(() => { setOpen(o => !o) }, []);

	const handleOpenChange = useCallback(({ open }: { open: boolean }) => {
		setOpen(open);
	}, []);

	return useMemo(() => ({ 
		isOpen: open, 
		open: openCb, 
		close: closeCb, 
		toggle: toggleCb,
		handleOpenChange
	}), [open, openCb, closeCb, toggleCb, handleOpenChange]);
}