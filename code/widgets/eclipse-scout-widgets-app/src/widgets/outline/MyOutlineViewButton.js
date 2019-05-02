/*******************************************************************************
 * Copyright (c) 2014-2019 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 ******************************************************************************/
import { OutlineViewButton } from '@eclipse-scout/eclipse-scout';

export default class MyOutlineViewButton extends OutlineViewButton {

  _init(model) {
    super._init(model);
    this._setCssClass('my'); // FIXME [awe] toolstack: add example for custom CSS/LESS
  };

}