/*
 * SPDX-FileCopyrightText: 2022 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import type { ContentFormatter } from '../../../change-content-context/use-change-editor-content-callback'
import { prependLinesOfSelection } from '../formatters/prepend-lines-of-selection'
import { ToolbarButton } from '../toolbar-button'
import React, { useCallback } from 'react'
import { CheckSquare as IconCheckSquare } from 'react-bootstrap-icons'

/**
 * Renders a button to create a checklist in the {@link Editor editor}.
 */
export const CheckListButton: React.FC = () => {
  const formatter: ContentFormatter = useCallback(({ currentSelection, markdownContent }) => {
    return prependLinesOfSelection(markdownContent, currentSelection, () => `- [ ] `)
  }, [])
  return <ToolbarButton i18nKey={'checkList'} icon={IconCheckSquare} formatter={formatter}></ToolbarButton>
}
